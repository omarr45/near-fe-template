const Home = ({ login, acc }) => {
  return (
    <main className='max-w-screen-lg text-center p-6 py-8 md:p-12 md:py-28 mx-auto'>
      <h2 className='mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Welcome to Shahr Aqari on Web3
      </h2>
      <hr className='mb-8 dark:opacity-20' />
      {acc ? (
        <div className='space-y-4'>
          <div>Welcome back!</div>
          <h2 className='w-fit mx-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>
            {acc.accountId}
          </h2>
        </div>
      ) : (
        <div className='space-y-4'>
          <div>You are not logged in, please login to continue</div>
          <button
            onClick={login}
            title='Log In'
            className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>
            Login with NEAR
          </button>
        </div>
      )}
    </main>
  );
};

export default Home;
