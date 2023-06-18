const Footer = () => (
  <footer className="w-full bg-[#373A3C]">
    <div className="flex flex-col justify-center items-end gap-1 w-full max-w-3xl mx-auto p-4 text-white">
      <h1 className="text-2xl">&copy; David Hilera Portfolio </h1>
      <p className=" text-sm">2018 - {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
