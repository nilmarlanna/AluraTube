import config from "../config.json";
import styled from "styled-components";

function HomePage() {
  const estilosDaHomePage = { backgroundColor: "red"};

   // console.log(config.playlists); 

    return (
      <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    );
  }
  
  export default HomePage

  function Menu() {
    return (
      <div>
          Menu
      </div>
    )
  }

  const StyledHeader = styled.div`
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
  `;

  function Header() {
    return (
      <StyledHeader>
          {/*<img src="banner" /> */}

        <section className="user-info">
          <img src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>
               {config.name}
             </h2>
            <p>
               {config.job}
             </p>
          </div>  
        </section>
      </StyledHeader>
    )
  }

  function Timeline(propriedades) {
   // console.log("Dentro do componente", propriedades.playlists);
    const playlistsNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão 
    return (
      <div>
            {playlistsNames.map((playlistsNames) => {
              const videos = propriedades.playlists[playlistsNames];
              console.log(playlistsNames);
              console.log(videos);
              return (
                    <section>
                      <h2>{playlistsNames}</h2>
                      <div>
                        {videos.map((map) => {
                          return (
                            <a href={videos.url}>
                              <img src={videos.thumb} />
                              <span>
                                  {videos.title}
                              </span>
                            </a>
                          )
                     })}
                     </div>
                   </section> 
              ) 
            })}
      </div>
    )
  }