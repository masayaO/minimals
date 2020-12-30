import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Form, Select } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const EnhancedRegisterItem: FC = () => {
  const options = [
    { key: 'fashion', text: 'Fashion', value: 'Fashion' },
    { key: 'stationery', text: 'Stationery', value: 'Stationery' },
    { key: 'other', text: 'Other', value: 'Other' },
  ];

  const { userId } = useParams();

  const [form, setForm] = useState({
    itemName: '',
    imageUrl: '',
    description: '',
    count: 0,
    category: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(
      `userId: ${userId}, form: ${form.description} ${form.itemName} ${form.imageUrl}`,
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="アイテム名"
          placeholder="アイテム名を入力..."
          type="text"
          name="itemName"
          value={form.itemName}
          onChange={handleChange}
        />
        <Form.Input
          label="アイテム数"
          placeholder="アイテム数..."
          type="number"
          value={form.count}
          onChange={(_, data) =>
            setForm({ ...form, count: Number(data.value) })
          }
        />
        <Form.Select
          control={Select}
          label="Category"
          options={options}
          value={form.category}
          placeholder="Category"
          name="category"
          onChange={(event, data) =>
            setForm({ ...form, category: String(data.value) })
          }
        />
        <Form.Input
          label="画像URL"
          placeholder="画像URL..."
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
        />
        <Form.Input
          label="概要"
          placeholder="概要..."
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <Form.Button type="submit" primary>
          アイテムを追加
        </Form.Button>
      </Form>
    </>
  );
};

export default EnhancedRegisterItem;
