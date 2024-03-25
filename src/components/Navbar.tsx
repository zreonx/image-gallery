const Navbar = () => {
  return (
    <div className='navbar bg-base-100 justify-between'>
      <div className='flex items-center gap-0'>
        <a className='btn btn-ghost text-xl bg-gradient-to-r from-slate-200 to-gray-700 bg-clip-text text-transparent px-4'>
          ImageZreon
        </a>
      </div>
      <button className='mr-5 mt-3'>logout</button>
    </div>
  );
};

export default Navbar;
