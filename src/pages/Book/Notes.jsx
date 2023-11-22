import { Form, Layout } from '../../components/index';
import PropTypes from 'prop-types';

export const Notes = ({ initialNote, onChange }) => {
  return (
    <section className="flex flex-col gap-6">
      <Layout.SecondaryHeader text="Notes"/>
      <Form.EditableTextarea
        label="Notes For Book"
        id="notes_textarea"
        name="notes_textarea"
        placeholder="Write your notes ..."
        initialValue={initialNote}
        onChange={onChange}
      />
    </section>
  );
};

Notes.propTypes = {
  initialNote: PropTypes.string,
  onChange: PropTypes.func,
}
