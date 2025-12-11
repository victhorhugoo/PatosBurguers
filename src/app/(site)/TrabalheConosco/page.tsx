
const TrabalheConosco: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/bg-fire.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* Conteúdo sobre o vídeo */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-white bg-black/40 pt-32 pl-6 pr-6">
        <h1 className="text-5xl font-medium">Patos Burguers</h1>
        <p className="mt-3 text-sm text-amber-400">Venha fazer parte do nosso Time!</p>
        <div className='w-full max-w-md md:max-w-2xl lg:max-w-3xl mt-10 bg-white/80 p-6 rounded-xl shadow-lg max-h-[70vh] overflow-y-auto'>
          <h1 className="text-center text-3xl font-bold text-amber-500">Trabalhe Conosco!</h1>
          <p className="text-center italic text-gray-600">Encaminhe seu email!</p>
          <p className="text-center italic text-gray-800 pt-4 m-3">Envie seu currículo atualizado em formato PDF para o email: <strong>patosburguers@gmail.com</strong> e com o assunto "CURRÍCULO",<br/> seu currículo irá para o nosso banco de talentos e poderá ser selecionado conforme nossas disponibilidades de vagas. <br/> <strong>Boa sorte!</strong></p>
        </div>
      </div>
    </div>
  );
};

export default TrabalheConosco;