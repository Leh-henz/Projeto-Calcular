import Post from "../post/Post";
import "./PostList.css";

const imageUrl = "";

export default function PostList() {

  return (
    <div className="post-list">
      <Post
        image={imageUrl}
        title="Para ser muito bom amanhã é preciso começar a praticar hoje"
        text={`São nos primeiros anos escolares que as criaças aprendem os fundamentos da matemártica,
           inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade 
           que a criança tenha nessa fase se refletirá por toda sua vida escolar :( `}
        text2={`Aqui você e seu filho irão encontrar, exercícios relacionados ao conteúdo ensinado
          nós primeiros anos escolares e buscara aperfeiçoar seu conhecimento nas operações básicas;`}
      />

      <Post
        title="Matemática: O Alicerce para o Sucesso Escolar!"
        text={`Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico
          e aprendem as quatro operações essencias: adição, subtração, multiplicação e divisão.
          Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a jornada!
          Aquim, você encontra exercícios divertidos e edutativos para aajuda seu filho
          a dominar as oeprações básicas e desenvolver confiança na matemática.`}
        text3={`Vamos juntos fortalecer essa base e transformar desafios em conquistas!
          #MatemáticaParaCrianças #EducaçãoMatemática #OperaçõesBásica #AprendizadoDivertido #FundamentosEscolares
          #MatemáticaFácil #ConfiançaNosNúmeros`}
      />
    </div>
  );
}
