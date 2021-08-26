export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KAI-YOU Marketing',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'KAI-YOU Marktingは、「ジャンルの垣根を超える」ものを「ポップ」と定義し、ありとあらゆるポップな事象をさらなる領域へ広げます。ポップカルチャーに関する専門性とネットワークをフルに生かし、デザイン・映像制作を手がけるクリエイティブ事業、イベント・番組の企画や運営、プロモーションなどのディレクションを行うマーケティング事業を展開しています。日々ポップカルチャーを追い求める私たちが培った知見をもとに、典型的な形式に止まらない、さまざまなプロモーション企画をご提案させていただきます。私たちと一緒に、「ポップ」に、世界へ発信していきましょう。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'KAI-YOU Marketing' },
      { hid: 'og:type', property: 'og:type', content: 'company' },
      { hid: 'og:image:width', content: "1200" },
      { hid: 'og:image:height', content: "630" },
      { hid: 'og:url', property: 'og:url', content: 'https://mkt.kai-you.co.jp' },
      { hid: 'og:title', property: 'og:title', content: 'KAI-YOU Marketing' },
      { hid: 'og:description', property: 'og:description', content: 'KAI-YOU Marktingは、「ジャンルの垣根を超える」ものを「ポップ」と定義し、ありとあらゆるポップな事象をさらなる領域へ広げます。ポップカルチャーに関する専門性とネットワークをフルに生かし、デザイン・映像制作を手がけるクリエイティブ事業、イベント・番組の企画や運営、プロモーションなどのディレクションを行うマーケティング事業を展開しています。日々ポップカルチャーを追い求める私たちが培った知見をもとに、典型的な形式に止まらない、さまざまなプロモーション企画をご提案させていただきます。私たちと一緒に、「ポップ」に、世界へ発信していきましょう。' },
      { hid: 'og:image', property: 'og:image', content: 'https://mkt.kai-you.co.jp/image/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://mkt.kai-you.co.jp' },
      { name: 'twitter:title', content: 'KAI-YOU Marketing'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/image/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin'},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shippori+Mincho:wght@400;500;600;700;800&display=swap" }
    ]
  },

  css: [
    { src: '~/src/scss/style.scss', lang: 'scss' },
  ],

  plugins: [
    { src: '~/plugins/v-smooth-scroll', mode: 'client' }
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  },

  target: 'static',

  router: {
  },
}
