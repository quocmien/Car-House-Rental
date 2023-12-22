'use client';

import { X } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';

export type OptionsMultiSelect = Record<'id' | 'name', string>;

interface IProps {
  options: OptionsMultiSelect[];
  placeholder?: string;
  onChange: (event: any) => void;
  value: OptionsMultiSelect[];
}

export function MultiSelect({
  options,
  placeholder,
  onChange,
  value = [],
}: IProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = React.useCallback((option: OptionsMultiSelect) => {
    onChange(value.filter((s: { id: string }) => s.id !== option.id));
  }, [value]);


  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            const newSelected = [...value];
            newSelected.pop();
            newSelected;
            onChange(newSelected);
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = options.filter((option) => {
    return !value.map((item) => item.id)?.includes(option?.id);
  });

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group border-b-2 border-input px-3 py-2.5 text-sm">
        <div className="flex gap-1 flex-wrap">
          {value?.map((option: OptionsMultiSelect) => {
            return (
              <Badge key={option?.id} variant="secondary">
                {option?.name}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(option);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(option)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder || ''}
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectables.map((option) => {
                return (
                  <CommandItem
                    key={option?.id}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={(_value) => {
                      onChange([...value, option]);
                      setInputValue('');
                    }}
                    className={'cursor-pointer'}
                  >
                    {option.name}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
