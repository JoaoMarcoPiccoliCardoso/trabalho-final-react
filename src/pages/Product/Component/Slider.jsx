import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css"
import { apiCards } from "../../services/api"

// import required modules
import { Navigation } from "swiper";;

export function Slider(props) {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data: cards } = await apiCards.get("https://trabalho-api-production.up.railway.app/produtos/dto");
      
      const filteredCards = cards.filter(card => card.categoriaProdDto.nome === props.category); 
      setCards(filteredCards);
    }
    
    fetchData();
  }, [])


  

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={3}
        loop={true}
        modules={[Navigation]}
        navigation={true}
        observer={true}
        observeParents={true}
        scrollbar = {{draggable: true}}
        // parallax={true}
        className="mySwiper"
        breakpoints= {{

         
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 3
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 3
          },

          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
            spaceBetween: 3
          },

          // when window width is >= 1440px
          1440: {
            slidesPerView: 3,
            spaceBetween: 3
          },

          // when window width is >= 2400px
          2400: {
            slidesPerView: 7,
            spaceBetween: 3
          }
        }}
      >
        {
          cards.map(card => {
            return (
                <SwiperSlide>
                  <a href={`/produtos/${card.id}`}> <img src={`https://trabalho-api-production.up.railway.app/upload/view/${card.id_imagem}`} /></a>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}