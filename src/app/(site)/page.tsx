import GradientMenuBody from "@/components/botao/button-body";
import Link from 'next/link';

const VideoBackground: React.FC = () => {
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
      <div className="relative z-10 flex flex-col items-center  content-center h-full text-white bg-black/40 pt-48 pl-6 pr-6">
        <h1 className="text-5xl font-medium">Patos Burguers</h1>
        <p className="mt-3 text-sm text-amber-400">A melhor Hamburgueria de Queimados!</p>
        <h3 className=" text-sm">Siga as nossas redes!</h3>
        <div className="flex font-medium text-lg">
          <ul className="flex flex-col space-y-4 p-8">
            <li>
              <Link
                href={'https://patosburguers.menudino.com/'}
                className="flex justify-center text-center py-2 px-6 border-2 border-black 
                          text-white rounded-4xl
                          bg-gradient-to-r from-amber-400 via-red-500 to-pink-800 
                          bg-[length:200%_200%] bg-left transition-all duration-500 
                          hover:bg-right hover:scale-125"
                >
                Cardápio
              </Link>
            </li>
            <li>
              <Link
                href={'https://www.ifood.com.br/delivery/queimados-rj/patos-burgers--lanches-artesanais--porcoes-e-salgadinhos-granja-rosalina/44ac3dd6-0201-4dbf-b402-36bf0a23fd64?utm_medium=share'}
                className="flex justify-center text-center py-2 px-6 border-2 border-black 
                          text-white rounded-4xl
                          bg-gradient-to-r from-amber-400 via-red-500 to-pink-800 
                          bg-[length:200%_200%] bg-left transition-all duration-500 
                          hover:bg-right hover:scale-125"
                >
                IFOOD
              </Link>
            </li>
            <li>
              <Link
                href={'/pesquisa'}
                className="flex justify-center text-center py-2 px-6 border-2 border-black 
                          text-white rounded-4xl
                          bg-gradient-to-r from-amber-400 via-red-500 to-pink-800 
                          bg-[length:200%_200%] bg-left transition-all duration-500 
                          hover:bg-right hover:scale-125"
                >
                Pesquisa de Satisfação
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-center '>
          <GradientMenuBody/>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;