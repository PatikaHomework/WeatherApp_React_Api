# Weather Uygulaması
## Bu uygulama, OpenWeatherMap API'si kullanılarak oluşturulmuş bir hava durumu uygulamasıdır. Bu uygulama, kullanıcının girdiği şehir için günlük ve haftalık hava durumu verilerini gösterir.

Uygulamada React, Tailwind CSS ve Vite kullanılmıştır.

## Kullanılan Paketler
- React: UI componentleri oluşturmak için kullanılmıştır.
- Tailwind CSS: Uygulamanın tasarımı için kullanılmıştır.
- Vite: Hızlı bir geliştirme sunmak için kullanılmıştır.
- Axios: API istekleri yapmak için kullanılmıştır.
- dayjs: Tarih formatını yönetmek için kullanılmıştır.
- React Icons: Uygulamada kullanılan ikonları sağlamak için kullanılmıştır.
Kurulum
- Bu projeyi klonlayın.
```
cd weather-app
```

- komutunu kullanarak proje klasörüne gidin.

```
npm install
```
- komutunu kullanarak bağımlılıkları yükleyin.
- OpenWeatherMap API adresinde ücretsiz bir hesap oluşturun.
```
npm run dev
```
- komutunu kullanarak uygulamayı çalıştırın.
- Uygulamayı http://localhost:3000 adresinden görüntüleyin.
# Kullanım
- Ana sayfada, seçenek kutusunadan bir şehir adı seçin.  Uygulama, seçilen şehrin günlük hava durumu verilerini gösterir.
- Kullanıcının seçtiği şehir adına göre, hava durumu verilerini çekme.
- Seçilen şehrin günlük hava durumu verilerini gösterme.
- Seçilen şehrin 5 günlük hava durumu verilerini gösterme.
- Hava durumu verilerini renkli ikonlarla gösterme.
- Mobil uyumlu tasarım.
# Tasarım
- Bu uygulama için minimalist ve kullanımı kolay bir tasarım hedeflendi. Tailwind CSS kullanılarak uygulamanın responsive bir tasarımı oluşturuldu. Hava durumu ikonları için React Icons kütüphanesi kullanıldı.

#API Kullanımı
- Bu uygulama OpenWeatherMap API'si kullanılarak oluşturuldu. API'den verileri çekmek için Axios kütüphanesi kullanıldı. API'den gelen veriler, günün saatine göre
