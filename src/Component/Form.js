const Form = () => {
  return (
    <form className="w-[40%]">
      <div className="md:flex md:items-center mb-6 justify-between">
        <div className="">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="name"
          >
            Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            name="name"
            type="text"
            value=""
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6 justify-between">
        <div className="">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            name="email"
            type="email"
            value=""
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6 justify-between">
        <div className="">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="phone"
          >
            Mobile Number
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            name="number"
            type="number"
            value=""
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

//const {
  //   handleChange,
  //   formData,
  //   errors,
  //   handleSubmit,
  //   min,
  //   handleSelectCarType,
  // } = useForm(validate);

 {/* <form className="mt-[30px]" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-3 justify-between">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>
        </div>
        <div className="md:flex md:items-center mb-3 justify-between">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>
        </div>
        <div className="md:flex md:items-center mb-3 justify-between">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="phone"
            >
              Mobile Number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-600">{errors.phone}</p>}
          </div>
        </div>
        <div className="md:flex md:items-center mb-3 justify-between">
          <div className="">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              PickUp & Drop
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200  mb-[20px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              name="pickup"
              type="text"
              value={formData.pickup}
              onChange={handleChange}
            />
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              name="drop"
              type="text"
              value={formData.drop}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-3 justify-between">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="schedule"
            >
              PickUp Time
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              name="schedule"
              type="datetime-local"
              value={formData.schedule}
              onChange={handleChange}
              min={min}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-3 justify-between">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="type"
            >
              Type
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              name="type"
              type="text"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center justify-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              submit
            </button>
          </div>
        </div>
      </form> */}