const Taxicard = ({ img, title, price }) => {
  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2">
      <a href="#">
        <img class="rounded-t-lg" src={img} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-500 rounded-lg ">
          {price}
        </p>
      </div>
    </div>

  )
}

export default Taxicard