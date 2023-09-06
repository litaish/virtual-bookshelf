import { Form, Layout } from '../../components/index';

export const Notes = () => {
  return (
    <section className="flex flex-col gap-6">
      <Layout.SecondaryHeader text="Notes"/>
      <Form.EditableTextarea
        label="Notes For Book"
        id="notes_textarea"
        name="notes_textarea"
        placeholder="Write your notes ..."
        initialValue="Hello, this is a test note."
      />
    </section>
  );
};
