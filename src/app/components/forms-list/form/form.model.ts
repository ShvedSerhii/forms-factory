export class FormModel {
  type: string;
  title: string;
  placeholder: string;
  value: string;
  data: Array<{ name: string; value: string }>;
  required: boolean;
  pattern: string;
}
