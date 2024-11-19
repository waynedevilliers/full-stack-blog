import { Form } from "react-router-dom";

const CreatePostForm = ({ formData, onInputChange, onFormSubmit }) => {
  return (
    <div className="create-post-form bg-white shadow-lg rounded-lg px-8 py-6 w-full max-w-lg mx-auto mt-8">
      {/* Form heading */}
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Create a New Post
      </h2>

      {/* Form with controlled components */}
      <Form method="post" onSubmit={onFormSubmit} className="space-y-5">
        {/* Title input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            id="title"
            name="title" // `name` matches the state key in formData
            type="text"
            value={formData.title} // Controlled input bound to `formData.title`
            onChange={onInputChange} // Call the handler on value change
            placeholder="Enter post title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description input */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={onInputChange}
            placeholder="write a post"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Author input */}
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
            Author
          </label>
          <input
            id="author"
            name="author"
            type="text"
            value={formData.author}
            onChange={onInputChange}
            placeholder="Enter your name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Date input */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={onInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Image URL input */}
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            value={formData.imageUrl}
            onChange={onInputChange}
            placeholder="Enter image URL"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Post
        </button>
      </Form>
    </div>
  );
};

export default CreatePostForm;



