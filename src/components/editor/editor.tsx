'use client';
import 'src/utils/highlight';
// @mui
//
import { postFormData } from '@/utils/post-form-data';
import { useEffect, useRef } from 'react';
import Toolbar, { formats } from './toolbar';
import { EditorProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './style.css';
import ReactQuill from 'react-quill';

// ----------------------------------------------------------------------

export default function Editor({
  id = 'minimal-quill',
  simple = false,
  ...other
}: EditorProps) {
  const modules = {
    toolbar: {
      container: `#${id}`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  const reactQuillRef = useRef<any>();

  useEffect(() => {
    let quill = reactQuillRef?.current?.getEditor();
    let toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', imageHandler);
  }, []);

  const imageHandler = () => {
    if (typeof document !== 'undefined') {
      let fileInput = document?.createElement('input') as any;
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.click();

      // Listen for file input change
      fileInput.onchange = async () => {
        let file = fileInput.files[0];
        // process and upload image file...

        // Create form data
        let formData = new FormData();
        formData.append('files', file);

        // Post to server
        const resRemoteImage = await postFormData({
          url: 'upload',
          body: formData,
        });

        console.log({ resRemoteImage });

        // Insert uploaded image
        let quill = reactQuillRef.current.getEditor();
        let range = quill.getSelection(true);
        quill.insertEmbed(range.index, 'image', resRemoteImage?.[0].url);
      };
    }
  };

  return (
    <div className="border-2 rounded-xl">
      <Toolbar id={id} simple={simple} />

      <ReactQuill
        ref={reactQuillRef}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Write something awesome..."
        {...other}
      />
    </div>
  );
}
