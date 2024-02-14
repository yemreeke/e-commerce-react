import React, { FC } from "react"
import { Container, Grid, Stack } from "@mui/material";
import MediaCard from "../components/MediaCard";
import { IProduct } from "../interface/product.interface";

const data: Array<IProduct> = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Telefon",
    brand: "Apple",
    price: 53699,
    description: "Apple'ın en son teknolojiye sahip iPhone modeli olan iPhone 15, şık tasarımı ve gelişmiş özellikleriyle dikkat çekiyor.",
    image: "https://m.media-amazon.com/images/I/71+8503v2xL._AC_SX522_.jpg"
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    category: "Telefon",
    brand: "Apple",
    price: 65499,
    description: "iPhone 15 serisinin profesyonel versiyonu olan iPhone 15 Pro, yüksek performansı ve kaliteli kamerasıyla öne çıkıyor.",
    image: "https://m.media-amazon.com/images/I/81NDDPNpt4L._AC_SX522_.jpg"
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    category: "Telefon",
    brand: "Apple",
    price: 76499,
    description: "iPhone 15 serisinin en üst modeli olan iPhone 15 Pro Max, büyük ekranı ve uzun pil ömrüyle kullanıcıların beğenisini kazanıyor.",
    image: "https://m.media-amazon.com/images/I/81fYvFvX-8L._AC_SX522_.jpg"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    category: "Telefon",
    brand: "Samsung",
    price: 39499,
    description: "Samsung'un son teknoloji ürünü Galaxy S24, şık tasarımı ve gelişmiş özellikleriyle dikkat çekiyor.",
    image: "https://m.media-amazon.com/images/I/71VhRDv5jXL._AC_SX679_.jpg"
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Plus",
    category: "Telefon",
    brand: "Samsung",
    price: 46499,
    description: "Samsung Galaxy S24 serisinin daha büyük ekranlı ve güçlü pil ömrüne sahip versiyonu olan Galaxy S24 Plus, kullanıcıların beğenisini kazanıyor.",
    image: "https://m.media-amazon.com/images/I/71CTAyhjh1L._AC_SX679_.jpg"
  },
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra",
    category: "Telefon",
    brand: "Samsung",
    price: 69999,
    description: "Samsung'un amiral gemisi modeli olan Galaxy S24 Ultra, üstün performansı ve kamerasıyla öne çıkıyor.",
    image: "https://m.media-amazon.com/images/I/71LFqVHpLML._AC_SX679_.jpg"
  },
  {
    id: 7,
    name: "Monster Abra A5 V21.2.2",
    category: "Laptop",
    brand: "Monster",
    price: 29999,
    description: "Monster Abra A5 V21.2.2, oyun tutkunlarının ihtiyaçlarını karşılamak için özel olarak tasarlanmış güçlü bir oyun bilgisayarıdır. Intel Core i5 12450H işlemci, 32 GB RAM ve 1 TB SSD depolama alanıyla donatılmış olan bu bilgisayar, yüksek performans ve hızlı veri erişimi sunar. 6 GB NVIDIA GeForce RTX 4050 ekran kartı, oyunlarda akıcı grafikler ve yüksek çözünürlükte görüntüler sağlar. 15,6 inç Full HD ekranı, 144 Hz yenileme hızıyla hareketli sahnelerde kesintisiz ve akıcı bir oyun deneyimi sunar. Üstelik, FreeDOS işletim sistemi sayesinde kullanıcılar istedikleri işletim sistemini yükleyebilir ve kişiselleştirebilirler. Monster Abra A5 V21.2.2, sağlam yapı ve etkileyici özellikleriyle oyun dünyasında öne çıkan bir seçenektir.",
    image: "https://m.media-amazon.com/images/I/71RSIbS2LiL._AC_SX522_.jpg"
  },
  {
    id: 8,
    name: "Monster Tulpar T7 V20.7.4",
    category: "Laptop",
    brand: "Monster",
    price: 39499,
    description: "Monster Tulpar T7 V20.7.4, oyuncular için tasarlanmış yüksek performanslı bir oyun bilgisayarını temsil eder. Güçlü Intel Core i7 12650H işlemci, 16 GB RAM ve hızlı veri erişimi için 1 TB SSD depolama alanıyla donatılmıştır. 8 GB NVIDIA GeForce RTX 4060 ekran kartı, oyunlarda etkileyici grafikler ve akıcı oynanış sunar. 17,3 inç Full HD ekranı, 144 Hz yenileme hızıyla hareketli sahnelerde kesintisiz ve akıcı bir oyun deneyimi sağlar. FreeDOS işletim sistemi, kullanıcıların istedikleri işletim sistemini yükleyerek bilgisayarlarını kişiselleştirmelerine olanak tanır. Monster Tulpar T7 V20.7.4, sağlam yapı ve yüksek performansıyla oyuncuların beğenisini kazanır ve oyun dünyasında kendine sağlam bir yer edinir.",
    image: "https://m.media-amazon.com/images/I/61nNxxFt0JL._AC_SX522_.jpg"
  },
  {
    id: 9,
    name: "Monster Abra A7 V14.5.4",
    category: "Laptop",
    brand: "Monster",
    price: 33999,
    description: "Monster Abra A7 V14.5.4, oyun tutkunlarının ihtiyaçlarına yönelik olarak tasarlanmış yüksek performanslı bir oyun bilgisayarıdır. Güçlü Intel Core i5 13500H işlemci, 16 GB RAM ve hızlı veri depolama için 1 TB SSD ile donatılmıştır. 6 GB NVIDIA GeForce RTX 4050 ekran kartı, oyunlarda akıcı grafikler ve etkileyici görüntüler sunar. 17,3 inç Full HD ekran, 144 Hz yenileme hızıyla hareketli sahnelerde kesintisiz ve akıcı bir oyun deneyimi sağlar. FreeDOS işletim sistemi, kullanıcılara işletim sistemi seçme özgürlüğü sunarak bilgisayarı kendi tercihlerine göre özelleştirmelerine imkan tanır. Monster Abra A7 V14.5.4, sağlam yapısı ve yüksek performansıyla oyun tutkunlarının beklentilerini karşılayan bir seçenektir.",
    image: "https://m.media-amazon.com/images/I/61B67Pt+vHL._AC_SX522_.jpg"
  },
  {
    id: 9,
    name: "MacBook Pro M3 Max",
    category: "Laptop",
    brand: "Apple",
    price: 129999,
    description: "Apple M3 Max çipe sahip 2023 MacBook Pro, güçlü performansı ve benzersiz özellikleriyle dikkat çeken bir dizüstü bilgisayardır. 16.2 inç Liquid Retina XDR ekranı, yüksek çözünürlüklü ve canlı renkler sunarak görsel deneyimi maksimum seviyeye taşır. 14 çekirdekli CPU ve 30 çekirdekli GPU, hızlı ve akıcı bir performans sağlar, böylece kullanıcılar en yoğun görevleri bile kolaylıkla gerçekleştirebilirler. 36 GB RAM ve 1 TB SSD depolama alanı, büyük dosyaları saklamak ve hızlı veri erişimi sağlamak için yeterli alan sunar. iPhone ve iPad ile uyumluluğu sayesinde Apple ekosistemiyle mükemmel bir entegrasyon sağlar. Gümüş rengiyle şık ve modern bir görünüme sahip olan bu MacBook Pro, kullanıcıların beklentilerini karşılamak için tasarlanmıştır.",
    image: "https://m.media-amazon.com/images/I/61uM7GTOwTL._AC_SX522_.jpg"
  },
  {
    id: 10,
    name: "MacBook Pro M3 Pro",
    category: "Laptop",
    brand: "Apple",
    price: 88899,
    description: "Apple M3 Pro çipe sahip 2023 MacBook Pro, kompakt tasarımı ve güçlü performansıyla dikkat çeken bir dizüstü bilgisayardır. 14.2 inç Liquid Retina XDR ekranı, canlı renkler ve yüksek çözünürlük ile görsel deneyimi zirveye taşır. 12 çekirdekli CPU ve 18 çekirdekli GPU, hızlı ve akıcı bir performans sağlar, böylece kullanıcılar en yoğun görevleri bile kolaylıkla gerçekleştirebilirler. 18 GB RAM ve 1 TB SSD depolama alanı, büyük dosyaları saklamak ve hızlı veri erişimi sağlamak için yeterli alan sunar. iPhone ve iPad ile uyumlu olması, Apple ekosistemi içinde sorunsuz bir entegrasyon sağlar. Uzay Siyahı rengiyle modern ve şık bir görünüme sahip olan bu MacBook Pro, kullanıcıların beklentilerini karşılamak üzere tasarlanmıştır.",
    image: "https://m.media-amazon.com/images/I/61uM7GTOwTL._AC_SX522_.jpg"
  },
  {
    id: 11,
    name: "MacBook Pro M3",
    category: "Laptop",
    brand: "Apple",
    price: 62939,
    description: "Apple M3 çipe sahip 2023 MacBook Pro, kompakt yapısı ve güçlü performansıyla öne çıkan bir dizüstü bilgisayardır. 14.2 inç Liquid Retina XDR ekranı, yüksek çözünürlüklü görüntüler sunarak görsel deneyimi maksimum seviyeye taşır. 8 çekirdekli CPU ve 10 çekirdekli GPU, hızlı ve verimli bir performans sağlar, böylece kullanıcılar her türlü işi kolaylıkla yapabilirler. 8 GB RAM ve 1 TB SSD depolama alanı, dosyalarınızı saklamak ve hızlı bir şekilde erişmek için yeterli alan sunar. iPhone ve iPad ile uyumluluğu sayesinde, Apple ekosistemi içinde sorunsuz bir entegrasyon sağlar. Uzay Grisi rengiyle modern ve şık bir görünüme sahip olan bu MacBook Pro, mobil bir yaşam tarzı için ideal bir seçenektir.",
    image: "https://m.media-amazon.com/images/I/61jAJOnEzKL._AC_SX522_.jpg"
  },
  {
    id: 12,
    name: "MacBook Air M2",
    category: "Laptop",
    brand: "Apple",
    price: 10999,
    description: "Apple M2 çipli 2023 model MacBook Air, ince ve hafif tasarımıyla öne çıkan bir dizüstü bilgisayardır. 15.3 inç Liquid Retina ekranı, canlı renkler ve yüksek çözünürlük sunarak görsel deneyimi geliştirir. 8 GB RAM ve 256 GB SSD depolama alanı, kullanıcıların dosyalarını saklaması ve hızlı erişim sağlaması için yeterli alan sunar. Arkadan aydınlatmalı klavye, kullanıcıların düşük ışık koşullarında rahatça çalışmalarını sağlar. Touch ID, kullanıcıların parmak iziyle kolayca bilgisayara erişmesini ve güvenliği artırmasını sağlar. iPhone ve iPad ile uyumluluğu, Apple ekosistemi içinde sorunsuz bir entegrasyon sağlar. Uzay Grisi rengiyle modern ve şık bir görünüme sahip olan bu MacBook Air, mobil kullanıcılar için ideal bir seçenektir.",
    image: "https://m.media-amazon.com/images/I/81xW62KXNhL._AC_SX522_.jpg"
  },
  {
    id: 13,
    name: "HyperX Cloud II Oyuncu Kulaklığı",
    category: "Kulaklık",
    brand: "HyperX",
    price: 2707,
    description: "HyperX Cloud II Gaming Kulaklık, oyunseverler için üst düzey ses performansı ve rahat kullanımı bir araya getiren bir üründür. 'Gun Metal' renkteki tasarımıyla şık ve modern bir görünüme sahiptir. Bu kulaklık, oyun sırasında net iletişim sağlamak için özel olarak tasarlanmış bir mikrofon içerir. Ayrıca kulaklık, uzun süreli kullanıma uygun yumuşak kulak yastıkları ve baş bandı ile donatılmıştır. HyperX Cloud II, PC, Mac, Xbox ve PlayStation gibi çeşitli platformlarla uyumludur, böylece farklı oyun deneyimlerinde sorunsuz bir şekilde kullanılabilir.",
    image: "https://m.media-amazon.com/images/I/71Y6QjZe94L._AC_SX679_.jpg"
  },
  {
    id: 14,
    name: "HyperX QuadCast Oyun Mikrofonu",
    category: "Mikrofon",
    brand: "HyperX",
    price: 3999,
    description: "HyperX QuadCast Oyun Mikrofonu, oyun yayıncıları ve içerik üreticileri için tasarlanmış yüksek kaliteli bir mikrofondur. Şık siyah tasarımıyla dikkat çeker ve masaüstü kullanım için idealdir. Bu mikrofon, çok yönlü kullanım için çeşitli özelliklere sahiptir, bunlar arasında kardioid, stereo, bidirectional ve omni-directional polar desenler bulunur. Bu, farklı kayıt ihtiyaçlarını karşılamak için ideal bir esneklik sağlar. Ayrıca, dahili bir pop filtresi ve titreşimi absorbe eden bir şok montaj sistemiyle donatılmıştır, bu da ses kalitesini artırır ve istenmeyen gürültüleri azaltır. HyperX QuadCast, USB bağlantısıyla kolayca bilgisayarlara ve oyun konsollarına bağlanabilir, böylece kullanıcılar kolayca oyun yayınları yapabilir veya kayıtlarını gerçekleştirebilir.",
    image: "https://m.media-amazon.com/images/I/71fvNPxUldL._AC_SY879_.jpg"
  },
  {
    id: 15,
    name: "HyperX Alloy Core Klavye",
    category: "Klavye",
    brand: "HyperX",
    price: 1299,
    description: "HyperX Alloy Core RGB Membran Klavye, oyunseverler için özel olarak tasarlanmış bir klavyedir. Türkçe düzenine sahip olan bu klavye, renkli RGB aydınlatma efektleriyle dikkat çeker ve oyun deneyimini daha eğlenceli hale getirir. Dayanıklı membran tuşları, uzun süreli kullanıma uygun rahat bir yazım deneyimi sunar. Ayrıca, klavye üzerinde medya kontrolleri ve kısayol tuşları bulunur, bu da kullanıcıların oyun oynarken veya multimedya içerikleri izlerken daha fazla kontrol sağlar. Ergonomik tasarımı ve kaymaz ayakları sayesinde klavye, uzun süreli kullanımlarda bile rahat bir konfor sunar. HyperX Alloy Core RGB Membran Klavye, oyunseverlerin ihtiyaçlarını karşılamak üzere tasarlanmış güvenilir ve şık bir seçenektir.",
    image: "https://m.media-amazon.com/images/I/61AVCnd++cL._AC_SX679_.jpg"
  }
]

interface Props {
}
const HomePage: FC<Props> = (props) => {

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Grid container sx={{ flexGrow: 1 }} >
        <Grid container item spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            data?.map((item: IProduct, index) => (
              <Grid item xs={4} >
                <Stack width={"100%"} alignItems={"center"}>
                  <MediaCard key={index} data={item} />
                </Stack>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Container>
  )
}
export default HomePage;