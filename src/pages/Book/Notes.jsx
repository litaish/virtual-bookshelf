import { Form } from '../../components/index';

export const Notes = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="border-solid border-b-2 flex justify-between items-center p-4 text-gray-800 text-2xl">
        Notes
      </h2>
      <div>
        <Form.Textarea
          label="Notes For Book"
          id="notes_textarea"
          name="notes_textarea"
          placeholder="Write your notes ..."
        />
      </div>
    </section>
  );
};
