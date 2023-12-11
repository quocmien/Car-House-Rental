import { ReactQuillProps } from 'react-quill';


// ----------------------------------------------------------------------

export interface EditorProps extends ReactQuillProps {
  id?: string;
  simple?: boolean;
}
