function App() {
  return (
    <>
      <div className="bg-secondary">
        <p>holis</p>
        <div className="bg-primary">
          {/*el className primary esta en el archivo de tailwind.config.js que se crea cuando se ejecuta el comando npm tailwind init -p*/}
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </>
  );
}

export default App;
