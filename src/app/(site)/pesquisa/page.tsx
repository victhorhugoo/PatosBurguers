'use client'

import { useState } from "react";
import api from "@/services/api";
import ConfettiFireworks from "@/components/botao/ConfettiFireworks";

const PesquisaSatisfacao: React.FC = () => {
  const [formAtivo, setFormAtivo] = useState<null | "salao" | "delivery">(null);

  // Função genérica para enviar os dados (envia arrays para checkboxes)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formAtivo) {
      alert('Escolha primeiro Delivery ou Salão.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Campos simples
    const nome = (formData.get('nome') ?? '').toString();
    const email = (formData.get('email') ?? '').toString();
    const telefone = (formData.get('telefone') ?? '').toString();
    const comentario = (formData.get('comentario') ?? '').toString();

    // Checkboxes (podem ter múltiplos valores)
    const avaliacao1 = formData.getAll('avaliacao1').map(v => v.toString());
    const avaliacao2 = formData.getAll('avaliacao2').map(v => v.toString());
    const avaliacao3 = formData.getAll('avaliacao3').map(v => v.toString());

    // Radio (um valor só)
    const avaliacao4 = (formData.get('avaliacao4') ?? '').toString();

    const payload = {
      nome,
      email,
      telefone,
      avaliacao1,
      avaliacao2,
      avaliacao3,
      avaliacao4,
      comentario,
    };

    const rota = formAtivo === 'delivery' ? '/deliveryform' : '/salaoform';

    try {
      const response = await api.post(rota, payload);
      console.log('Resposta do backend:', response.data);

      alert(response.data?.message ?? 'Feedback enviado com sucesso!');
      setFormAtivo(null);
      form.reset();
    } catch (err: any) {
      console.error('Erro ao enviar:', err?.response ?? err);
      const msg = err?.response?.data?.error ?? err?.message ?? 'Erro ao enviar feedback';
      alert(msg);
    }
  };

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
      <div className="relative w-full z-10 flex flex-col items-center justify-start h-full text-white bg-black/40 pt-32 px-6 pb-12">
        <h1 className="text-5xl font-medium">Patos Burguers</h1>
        <p className="mt-3 text-sm text-amber-400">A melhor Hamburgueria de Queimados!</p>

        {!formAtivo ? (
          <>
            <p className="text-center pt-8 mt-3 text-sm text-white max-w-2xl">
              Para responder a pesquisa clique em{" "}
              <strong className="text-amber-400">DELIVERY</strong>, se o seu último pedido foi pelo delivery ou{" "}
              <br className="block md:hidden" />
              clique em <strong className="text-amber-400">SALÃO</strong>, caso o seu último pedido foi no salão.
            </p>

            <div className="flex flex-col pt-8">
              <ul className="flex justify-center gap-8 p-8">
                <li>
                  <button
                    onClick={() => setFormAtivo("salao")}
                    className="flex justify-center text-center w-40 py-2 px-6 border-2 border-black
                      text-white rounded-4xl
                      bg-gradient-to-r from-amber-400 via-red-500 to-pink-800
                      bg-[length:200%_200%] bg-left transition-all duration-500
                      hover:bg-right hover:scale-105"
                  >
                    Salão
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setFormAtivo("delivery")}
                    className="flex justify-center text-center w-40 py-2 px-6 border-2 border-black
                      text-white rounded-4xl
                      bg-gradient-to-r from-amber-400 via-red-500 to-pink-800
                      bg-[length:200%_200%] bg-left transition-all duration-500
                      hover:bg-right hover:scale-105"
                  >
                    Delivery
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl mt-10 bg-white/80 p-6 rounded-xl shadow-lg max-h-[70vh] overflow-y-auto">
            {formAtivo === "salao" && (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-2 bg-transparent text-black rounded-2xl"
              >
                <h1 className="text-center text-3xl font-bold text-amber-500">Feedback do Salão</h1>

                <div>
                  <label className="font-semibold">Nome:</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className="w-full border-2 border-black p-3 rounded-lg mt-1 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                  />
                </div>

                <div>
                  <label className="font-semibold">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border-2 border-black p-3 rounded-lg mt-1 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                  />
                </div>

                <div>
                  <label className="font-semibold">Telefone:</label>
                  <input
                    type="tel"
                    name="telefone"
                    pattern="[0-9]{10,15}"
                    placeholder="(21) 91234-5678"
                    className="w-full border-2 border-black p-3 rounded-lg mt-1 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                  />
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block text-center">O que pode melhorar no Patos?</label>
                  <p className="text-sm text-gray-600 mb-1">Selecione as opções:</p>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-600 transition duration-200">
                      <input type="checkbox" name="avaliacao1" value="1" className="form-checkbox h-4 w-4" />
                      Embalagem e lacre
                    </label>
                    <label><input type="checkbox" name="avaliacao1" value="2" /> Tempo de entrega</label>
                    <label><input type="checkbox" name="avaliacao1" value="3" /> Atendimento WhatsApp</label>
                    <label><input type="checkbox" name="avaliacao1" value="4" /> Facilidade do cardápio</label>
                    <label><input type="checkbox" name="avaliacao1" value="5" /> Educação dos motoboys</label>
                    <label><input type="checkbox" name="avaliacao1" value="6" /> Informações do cardápio</label>
                    <label><input type="checkbox" name="avaliacao1" value="7" /> Batata fria/murcha</label>
                    <label><input type="checkbox" name="avaliacao1" value="8" /> Lanche frio</label>
                    <label><input type="checkbox" name="avaliacao1" value="9" /> Mais opções de lanches</label>
                    <label><input type="checkbox" name="avaliacao1" value="10" /> Nada, já está ótimo</label>
                  </div>
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block text-center">Pontos fortes do Patos:</label>
                  <div className="flex flex-col gap-2">
                    <label><input type="checkbox" name="avaliacao2" value="11" /> Lanche super gostoso</label>
                    <label><input type="checkbox" name="avaliacao2" value="12" /> Embalagens boas e bonitas</label>
                    <label><input type="checkbox" name="avaliacao2" value="13" /> Chega bem embalado</label>
                    <label><input type="checkbox" name="avaliacao2" value="14" /> Dá vontade de fotografar</label>
                    <label><input type="checkbox" name="avaliacao2" value="15" /> Atendimento claro no WhatsApp</label>
                    <label><input type="checkbox" name="avaliacao2" value="16" /> Atendente educado e prestativo</label>
                    <label><input type="checkbox" name="avaliacao2" value="17" /> Entrega rápida</label>
                    <label><input type="checkbox" name="avaliacao2" value="18" /> Entregador carismático</label>
                    <label><input type="checkbox" name="avaliacao2" value="19" /> Pedido chega quentinho</label>
                  </div>
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block text-center">Como conheceu o Patos Burguers?</label>
                  <div className="flex flex-col gap-2">
                    <label><input type="checkbox" name="avaliacao3" value="20" /> Instagram</label>
                    <label><input type="checkbox" name="avaliacao3" value="21" /> Google</label>
                    <label><input type="checkbox" name="avaliacao3" value="22" /> Facebook</label>
                    <label><input type="checkbox" name="avaliacao3" value="23" /> Indicação</label>
                    <label><input type="checkbox" name="avaliacao3" value="24" /> Passando pela frente</label>
                  </div>
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block text-center">Avaliação do atendimento:</label>
                  <div className="flex flex-col gap-2">
                    <label><input type="radio" name="avaliacao4" value="25" /> Muito ruim</label>
                    <label><input type="radio" name="avaliacao4" value="26" /> Ruim</label>
                    <label><input type="radio" name="avaliacao4" value="27" /> Regular</label>
                    <label><input type="radio" name="avaliacao4" value="28" /> Bom</label>
                    <label><input type="radio" name="avaliacao4" value="29" /> Excelente</label>
                  </div>
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block">Ideias, sugestões ou reclamações:</label>
                  <textarea
                    name="comentario"
                    className="w-full border-2 border-black p-3 rounded-lg mt-1 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                  />
                </div>
                <ConfettiFireworks/>
              </form>
            )}

            {formAtivo === "delivery" && (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-2 bg-transparent text-black rounded-2xl"
              >
                <h1 className="text-center text-3xl font-bold text-amber-500">Feedback do Delivery</h1>

                <div>
                  <label className="font-semibold">Nome:</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    className="w-full border-2 border-black p-3 rounded-lg mt-1 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                  />
                </div>

                <div>
                  <label className="font-semibold">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border-2 border-black p-3 rounded-lg mt-1 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                  />
                </div>

                <div>
                  <label className="font-semibold">Telefone:</label>
                  <input
                    type="tel"
                    name="telefone"
                    pattern="[0-9]{10,15}"
                    placeholder="(21) 91234-5678"
                    className="w-full border-2 border-black p-3 rounded-lg mt-1 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                  />
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block text-center">O que pode melhorar no Patos?</label>
                  <p className="text-sm text-gray-600 mb-1">Selecione as opções:</p>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-amber-600 transition duration-200">
                      <input type="checkbox" name="avaliacao1" value="1" className="form-checkbox h-4 w-4" />
                      Embalagem e lacre
                    </label>
                    <label><input type="checkbox" name="avaliacao1" value="2" /> Tempo de entrega</label>
                    <label><input type="checkbox" name="avaliacao1" value="3" /> Atendimento WhatsApp</label>
                    <label><input type="checkbox" name="avaliacao1" value="4" /> Facilidade do cardápio</label>
                    <label><input type="checkbox" name="avaliacao1" value="5" /> Educação dos motoboys</label>
                    <label><input type="checkbox" name="avaliacao1" value="6" /> Informações do cardápio</label>
                    <label><input type="checkbox" name="avaliacao1" value="7" /> Batata fria/murcha</label>
                    <label><input type="checkbox" name="avaliacao1" value="8" /> Lanche frio</label>
                    <label><input type="checkbox" name="avaliacao1" value="9" /> Mais opções de lanches</label>
                    <label><input type="checkbox" name="avaliacao1" value="10" /> Nada, já está ótimo</label>
                  </div>
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block text-center">Pontos fortes do Patos:</label>
                  <div className="flex flex-col gap-2">
                    <label><input type="checkbox" name="avaliacao2" value="11" /> Lanche super gostoso</label>
                    <label><input type="checkbox" name="avaliacao2" value="12" /> Embalagens boas e bonitas</label>
                    <label><input type="checkbox" name="avaliacao2" value="13" /> Chega bem embalado</label>
                    <label><input type="checkbox" name="avaliacao2" value="14" /> Dá vontade de fotografar</label>
                    <label><input type="checkbox" name="avaliacao2" value="15" /> Atendimento claro no WhatsApp</label>
                    <label><input type="checkbox" name="avaliacao2" value="16" /> Atendente educado e prestativo</label>
                    <label><input type="checkbox" name="avaliacao2" value="17" /> Entrega rápida</label>
                    <label><input type="checkbox" name="avaliacao2" value="18" /> Entregador carismático</label>
                    <label><input type="checkbox" name="avaliacao2" value="19" /> Pedido chega quentinho</label>
                  </div>
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block text-center">Como conheceu o Patos Burguers?</label>
                  <div className="flex flex-col gap-2">
                    <label><input type="checkbox" name="avaliacao3" value="20" /> Instagram</label>
                    <label><input type="checkbox" name="avaliacao3" value="21" /> Google</label>
                    <label><input type="checkbox" name="avaliacao3" value="22" /> Facebook</label>
                    <label><input type="checkbox" name="avaliacao3" value="23" /> Indicação</label>
                    <label><input type="checkbox" name="avaliacao3" value="24" /> Passando pela frente</label>
                  </div>
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block text-center">Avaliação do atendimento:</label>
                  <div className="flex flex-col gap-2">
                    <label><input type="radio" name="avaliacao4" value="25" /> Muito ruim</label>
                    <label><input type="radio" name="avaliacao4" value="26" /> Ruim</label>
                    <label><input type="radio" name="avaliacao4" value="27" /> Regular</label>
                    <label><input type="radio" name="avaliacao4" value="28" /> Bom</label>
                    <label><input type="radio" name="avaliacao4" value="29" /> Excelente</label>
                  </div>
                </div>

                <hr className="h-0.5 bg-amber-500 border-0" />

                <div>
                  <label className="font-semibold block">Ideias, sugestões ou reclamações:</label>
                  <textarea
                    name="comentario"
                    className="w-full border-2 border-black p-3 rounded-lg mt-1 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                  />
                </div>
                <ConfettiFireworks/>
              </form>
            )}

            <button
              onClick={() => setFormAtivo(null)}
              className="mt-6 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Voltar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PesquisaSatisfacao;
