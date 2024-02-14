import React, { FC } from "react"
import { Box, Container, Grid } from "@mui/material";
import MediaCard from "../components/MediaCard";
import { IProduct } from "../interface/product.interface";

const data: Array<IProduct> = [
  {
    "id": 1,
    "name": "iPhone 15",
    "category": "Telefon",
    "brand": "Apple",
    "price": 53699,
    "description": "Apple'ın en son teknolojiye sahip iPhone modeli olan iPhone 15, şık tasarımı ve gelişmiş özellikleriyle dikkat çekiyor.",
    "image": "https://m.media-amazon.com/images/I/71+8503v2xL._AC_SX522_.jpg"
  },
  {
    "id": 2,
    "name": "iPhone 15 Pro",
    "category": "Telefon",
    "brand": "Apple",
    "price": 65499,
    "description": "iPhone 15 serisinin profesyonel versiyonu olan iPhone 15 Pro, yüksek performansı ve kaliteli kamerasıyla öne çıkıyor.",
    "image": "https://m.media-amazon.com/images/I/81NDDPNpt4L._AC_SX522_.jpg"
  },
  {
    "id": 3,
    "name": "iPhone 15 Pro Max",
    "category": "Telefon",
    "brand": "Apple",
    "price": 76499,
    "description": "iPhone 15 serisinin en üst modeli olan iPhone 15 Pro Max, büyük ekranı ve uzun pil ömrüyle kullanıcıların beğenisini kazanıyor.",
    "image": "https://m.media-amazon.com/images/I/81fYvFvX-8L._AC_SX522_.jpg"
  },
  {
    "id": 4,
    "name": "Samsung Galaxy S24",
    "category": "Telefon",
    "brand": "Samsung",
    "price": 39499,
    "description": "Samsung'un son teknoloji ürünü Galaxy S24, şık tasarımı ve gelişmiş özellikleriyle dikkat çekiyor.",
    "image": "https://m.media-amazon.com/images/I/71VhRDv5jXL._AC_SX679_.jpg"
  },
  {
    "id": 5,
    "name": "Samsung Galaxy S24 Plus",
    "category": "Telefon",
    "brand": "Samsung",
    "price": 46499,
    "description": "Samsung Galaxy S24 serisinin daha büyük ekranlı ve güçlü pil ömrüne sahip versiyonu olan Galaxy S24 Plus, kullanıcıların beğenisini kazanıyor.",
    "image": "https://m.media-amazon.com/images/I/71CTAyhjh1L._AC_SX679_.jpg"
  },
  {
    "id": 6,
    "name": "Samsung Galaxy S24 Ultra",
    "category": "Telefon",
    "brand": "Samsung",
    "price": 69999,
    "description": "Samsung'un amiral gemisi modeli olan Galaxy S24 Ultra, üstün performansı ve kamerasıyla öne çıkıyor.",
    "image": "https://m.media-amazon.com/images/I/71LFqVHpLML._AC_SX679_.jpg"
  },
  {
    "id": 7,
    "name": "Monster Abra A5 V21.2.2",
    "category": "Laptop",
    "brand": "Monster",
    "price": 29999,
    "description": "Monster Abra A5 V21.2.2, oyun tutkunlarının ihtiyaçlarını karşılamak için özel olarak tasarlanmış güçlü bir oyun bilgisayarıdır. Intel Core i5 12450H işlemci, 32 GB RAM ve 1 TB SSD depolama alanıyla donatılmış olan bu bilgisayar, yüksek performans ve hızlı veri erişimi sunar. 6 GB NVIDIA GeForce RTX 4050 ekran kartı, oyunlarda akıcı grafikler ve yüksek çözünürlükte görüntüler sağlar. 15,6 inç Full HD ekranı, 144 Hz yenileme hızıyla hareketli sahnelerde kesintisiz ve akıcı bir oyun deneyimi sunar. Üstelik, FreeDOS işletim sistemi sayesinde kullanıcılar istedikleri işletim sistemini yükleyebilir ve kişiselleştirebilirler. Monster Abra A5 V21.2.2, sağlam yapı ve etkileyici özellikleriyle oyun dünyasında öne çıkan bir seçenektir.",
    "image": "https://m.media-amazon.com/images/I/71RSIbS2LiL._AC_SX522_.jpg"
  },
  {
    "id": 8,
    "name": "Monster Tulpar T7 V20.7.4",
    "category": "Laptop",
    "brand": "Monster",
    "price": 39499,
    "description": "Monster Tulpar T7 V20.7.4, oyuncular için tasarlanmış yüksek performanslı bir oyun bilgisayarını temsil eder. Güçlü Intel Core i7 12650H işlemci, 16 GB RAM ve hızlı veri erişimi için 1 TB SSD depolama alanıyla donatılmıştır. 8 GB NVIDIA GeForce RTX 4060 ekran kartı, oyunlarda etkileyici grafikler ve akıcı oynanış sunar. 17,3 inç Full HD ekranı, 144 Hz yenileme hızıyla hareketli sahnelerde kesintisiz ve akıcı bir oyun deneyimi sağlar. FreeDOS işletim sistemi, kullanıcıların istedikleri işletim sistemini yükleyerek bilgisayarlarını kişiselleştirmelerine olanak tanır. Monster Tulpar T7 V20.7.4, sağlam yapı ve yüksek performansıyla oyuncuların beğenisini kazanır ve oyun dünyasında kendine sağlam bir yer edinir.",
    "image": "https://m.media-amazon.com/images/I/61nNxxFt0JL._AC_SX522_.jpg"
  },
  {
    "id": 9,
    "name": "Monster Abra A7 V14.5.4",
    "category": "Laptop",
    "brand": "Monster",
    "price": 33999,
    "description": "Monster Abra A7 V14.5.4, oyun tutkunlarının ihtiyaçlarına yönelik olarak tasarlanmış yüksek performanslı bir oyun bilgisayarıdır. Güçlü Intel Core i5 13500H işlemci, 16 GB RAM ve hızlı veri depolama için 1 TB SSD ile donatılmıştır. 6 GB NVIDIA GeForce RTX 4050 ekran kartı, oyunlarda akıcı grafikler ve etkileyici görüntüler sunar. 17,3 inç Full HD ekran, 144 Hz yenileme hızıyla hareketli sahnelerde kesintisiz ve akıcı bir oyun deneyimi sağlar. FreeDOS işletim sistemi, kullanıcılara işletim sistemi seçme özgürlüğü sunarak bilgisayarı kendi tercihlerine göre özelleştirmelerine imkan tanır. Monster Abra A7 V14.5.4, sağlam yapısı ve yüksek performansıyla oyun tutkunlarının beklentilerini karşılayan bir seçenektir.",
    "image": "https://m.media-amazon.com/images/I/61B67Pt+vHL._AC_SX522_.jpg"
  },
  {
    "id": 9,
    "name": "MacBook Pro M3 Max",
    "category": "Laptop",
    "brand": "Apple",
    "price": 129999,
    "description": "Apple M3 Max çipe sahip 2023 MacBook Pro, güçlü performansı ve benzersiz özellikleriyle dikkat çeken bir dizüstü bilgisayardır. 16.2 inç Liquid Retina XDR ekranı, yüksek çözünürlüklü ve canlı renkler sunarak görsel deneyimi maksimum seviyeye taşır. 14 çekirdekli CPU ve 30 çekirdekli GPU, hızlı ve akıcı bir performans sağlar, böylece kullanıcılar en yoğun görevleri bile kolaylıkla gerçekleştirebilirler. 36 GB RAM ve 1 TB SSD depolama alanı, büyük dosyaları saklamak ve hızlı veri erişimi sağlamak için yeterli alan sunar. iPhone ve iPad ile uyumluluğu sayesinde Apple ekosistemiyle mükemmel bir entegrasyon sağlar. Gümüş rengiyle şık ve modern bir görünüme sahip olan bu MacBook Pro, kullanıcıların beklentilerini karşılamak için tasarlanmıştır.",
    "image": "https://m.media-amazon.com/images/I/61uM7GTOwTL._AC_SX522_.jpg"
  },
  {
    "id": 10,
    "name": "MacBook Pro M3 Pro",
    "category": "Laptop",
    "brand": "Apple",
    "price": 88899,
    "description": "Apple M3 Pro çipe sahip 2023 MacBook Pro, kompakt tasarımı ve güçlü performansıyla dikkat çeken bir dizüstü bilgisayardır. 14.2 inç Liquid Retina XDR ekranı, canlı renkler ve yüksek çözünürlük ile görsel deneyimi zirveye taşır. 12 çekirdekli CPU ve 18 çekirdekli GPU, hızlı ve akıcı bir performans sağlar, böylece kullanıcılar en yoğun görevleri bile kolaylıkla gerçekleştirebilirler. 18 GB RAM ve 1 TB SSD depolama alanı, büyük dosyaları saklamak ve hızlı veri erişimi sağlamak için yeterli alan sunar. iPhone ve iPad ile uyumlu olması, Apple ekosistemi içinde sorunsuz bir entegrasyon sağlar. Uzay Siyahı rengiyle modern ve şık bir görünüme sahip olan bu MacBook Pro, kullanıcıların beklentilerini karşılamak üzere tasarlanmıştır.",
    "image": "https://m.media-amazon.com/images/I/61uM7GTOwTL._AC_SX522_.jpg"
  },
  {
    "id": 11,
    "name": "MacBook Pro M3 Max",
    "category": "Laptop",
    "brand": "Apple",
    "price": 33999,
    "description": "Apple M3 Max çipe sahip 2023 MacBook Pro, güçlü performansı ve benzersiz özellikleriyle dikkat çeken bir dizüstü bilgisayardır. 16.2 inç Liquid Retina XDR ekranı, yüksek çözünürlüklü ve canlı renkler sunarak görsel deneyimi maksimum seviyeye taşır. 14 çekirdekli CPU ve 30 çekirdekli GPU, hızlı ve akıcı bir performans sağlar, böylece kullanıcılar en yoğun görevleri bile kolaylıkla gerçekleştirebilirler. 36 GB RAM ve 1 TB SSD depolama alanı, büyük dosyaları saklamak ve hızlı veri erişimi sağlamak için yeterli alan sunar. iPhone ve iPad ile uyumluluğu sayesinde Apple ekosistemiyle mükemmel bir entegrasyon sağlar. Gümüş rengiyle şık ve modern bir görünüme sahip olan bu MacBook Pro, kullanıcıların beklentilerini karşılamak için tasarlanmıştır.",
    "image": "https://m.media-amazon.com/images/I/61uM7GTOwTL._AC_SX522_.jpg"
  },
  {
    "id": 10,
    "name": "HP Spectre x360",
    "category": "Laptop",
    "brand": "HP",
    "price": 8999,
    "description": "HP Spectre x360, şık tasarımı ve 360 derece dönebilir ekranıyla dikkat çeken bir ultrabook modelidir.",
    "image": "spectrex360.jpg"
  },
  {
    "id": 11,
    "name": "Sony Xperia 1 III",
    "category": "Telefon",
    "brand": "Sony",
    "price": 9999,
    "description": "Sony Xperia 1 III, yüksek çözünürlüklü ekranı ve profesyonel kamera özellikleriyle dikkat çekiyor.",
    "image": "xperia1iii.jpg"
  },
  {
    "id": 12,
    "name": "OnePlus 10 Pro",
    "category": "Telefon",
    "brand": "OnePlus",
    "price": 10999,
    "description": "OnePlus 10 Pro, hızlı işlemcisi ve gelişmiş kamera özellikleriyle dikkat çeken bir akıllı telefondur.",
    "image": "oneplus10pro.jpg"
  },
  {
    "id": 13,
    "name": "Huawei Mate 40 Pro",
    "category": "Telefon",
    "brand": "Huawei",
    "price": 8999,
    "description": "Huawei Mate 40 Pro, güçlü performansı ve üstün kamera özellikleriyle kullanıcıların beğenisini kazanıyor.",
    "image": "mate40pro.jpg"
  },
  {
    "id": 14,
    "name": "Xiaomi Mi 11 Ultra",
    "category": "Telefon",
    "brand": "Xiaomi",
    "price": 10999,
    "description": "Xiaomi Mi 11 Ultra, büyük ekranı ve uzun pil ömrüyle dikkat çeken bir akıllı telefondur.",
    "image": "mi11ultra.jpg"
  },
  {
    "id": 15,
    "name": "Asus ROG Zephyrus G14",
    "category": "Laptop",
    "brand": "Asus",
    "price": 9999,
    "description": "Asus ROG Zephyrus G14, kompakt tasarımı ve güçlü performansıyla oyun tutkunlarının tercihi olan bir oyuncu dizüstü bilgisayarıdır.",
    "image": "rogzephyrusg14.jpg"
  },
  {
    "id": 16,
    "name": "Acer Predator Helios 300",
    "category": "Laptop",
    "brand": "Acer",
    "price": 8999,
    "description": "Acer Predator Helios 300, yüksek performansı ve uygun fiyatıyla dikkat çeken bir oyuncu dizüstü bilgisayarıdır.",
    "image": "predatorhelios300.jpg"
  },
  {
    "id": 17,
    "name": "MSI GS66 Stealth",
    "category": "Laptop",
    "brand": "MSI",
    "price": 10999,
    "description": "MSI GS66 Stealth, şık tasarımı ve güçlü performansıyla dikkat çeken bir oyuncu dizüstü bilgisayarıdır.",
    "image": "gs66stealth.jpg"
  },
  {
    "id": 18,
    "name": "Google Pixel 6 Pro",
    "category": "Telefon",
    "brand": "Google",
    "price": 8999,
    "description": "Google Pixel 6 Pro, yüksek kaliteli kamerası ve akıcı kullanıcı deneyimiyle dikkat çeken bir akıllı telefondur.",
    "image": "pixel6pro.jpg"
  },
  {
    "id": 19,
    "name": "LG Gram 17",
    "category": "Laptop",
    "brand": "LG",
    "price": 11999,
    "description": "LG Gram 17, hafif ve uzun pil ömrüne sahip tasarımıyla dikkat çeken bir dizüstü bilgisayardır.",
    "image": "lggram17.jpg"
  },
  {
    "id": 20,
    "name": "Razer Blade 15",
    "category": "Laptop",
    "brand": "Razer",
    "price": 12999,
    "description": "Razer Blade 15, yüksek performansı ve şık tasarımıyla dikkat çeken bir oyuncu dizüstü bilgisayarıdır.",
    "image": "razerblade15.jpg"
  }
]

interface Props {
}
const HomePage: FC<Props> = (props) => {

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Grid container sx={{ flexGrow: 1 }} >
        <Grid container item spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {
            data?.map((item: IProduct, index) => (
              <Grid item xs={4}>
                <MediaCard key={index} data={item} />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Container>
  )
}
export default HomePage;