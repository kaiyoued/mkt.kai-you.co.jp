<template>
  <div>
    <div class="kv_wrapper kv">
      <picture>
        <source srcset="~/assets/image/kv/KV.jpg"  media="(min-width: 767px)">
          <img src="~/assets/image/kv/KV_sp.jpg" alt="" />
      </picture>
      <h1 class="kv-text">プロモーションをポップに、
        <br>コンテンツからカルチャーへ
      </h1>
    </div>
    <section id="1" class="section section_message">
      <div class="section_message-inner flex_inner">
        <div class="section-title color_blue">
          <p>メッセージ</p>
          <h2>MESSAGE</h2>
        </div>
        <div class="section_content section_message-content">
          <p class="sub-title">マーケティングとポップカルチャーの架け橋に</p>

          <p class="defaul-txt">
            KAI-YOU Marketingでは、ポップカルチャーに関する専門性とネットワークをフルに生かし、マーケティング活動をサポートいたします
            <br>
            <br>
            ポップカルチャーを活用したプロモーションプランのプランニング、デザインや映像を手がけるクリエイティブ事業、イベントや番組の企画・ディレクションなど、日々ポップカルチャーを追い求める私たちが培った知見をもとに、典型的な形式に止まらない、さまざまなプロモーション企画をご提案させていただきます
            <br>
            <br>
            私たちと一緒に、「ポップ」に、世界へ発信していきましょう
          </p>
        </div>
      </div>
    </section>
    <section id="2" class="section section_solution bg_blue">
      <div class="section_solution-inner flex_inner">
        <div class="section-title color_wh">
          <p>ソリューション</p>
          <h2>SOLUTION</h2>
        </div>
        <div class="section_content section_solution-content">
          <div class="section_solution-content-block sp_bg-wh add-top">
            <div class="sp_flex_box">
              <picture class="image image_1">
                <source srcset="~/assets/image/solution/solution1.svg"  media="(min-width: 767px)">
                  <img src="~/assets/image/solution/global.svg" alt="" />
              </picture>
              <p class="block_title">MEDIA</p>
            </div>
            <p class="block_detail">KAI-YOU.netをはじめとした各種Webメディアでのプロモーションのご提案、進行管理を行います。また、Webメディアの運用なども随時承っております。</p>
          </div>
          <span></span>
          <div class="section_solution-content-block">
            <div class="sp_flex_box">
              <img class="image image_2" src="~/assets/image/solution/solution2.svg" alt="">
              <p class="block_title">CREATIVE</p>
            </div>
            <p class="block_detail">
              ポップカルチャーの知見を生かし、課題解決に最適化されたディレクションを行います。
              <br>
              Webサイトの構築、ビジュアルや映像の企画制作だけに留まらず、リリース後のPR設計まで寄り添います。
            </p>
          </div>
          <span></span>
          <div class="section_solution-content-block sp_bg-wh">
            <div class="sp_flex_box">
              <picture class="image image_3">
                <source srcset="~/assets/image/solution/solution3.svg"  media="(min-width: 767px)">
                  <img src="~/assets/image/solution/speaker.svg" alt="" />
              </picture>
              <p class="block_title">PLANNING</p>
            </div>
            <p class="block_detail">
              ユーザーの心が動く広告は、商材によって大きく異なります。より高い効果を狙うために適切なクリエイター・企業と連携を行いながら、ユーザーにとって価値のあるコンテンツの企画・ディレクションを行います。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="3" class="section section_works">
      <div class="section_works-inner">
        <div class="section-title color_blue">
          <p>制作実績</p>
          <h2>WORKS</h2>
        </div>
        <div class="section_content section_works-content">
          <WorkListItem
            v-for="work in works"
            :key="work.id"
            :work="work"
          />
        </div>
        <a target="_blank" href="http://kai-you.co.jp/works/" class="lp_button">制作実績をもっとみる</a>
      </div>
    </section>
    <section id="4" class="section section_flow bg_blue">
      <div class="section_flow-inner">
        <div class="section-title color_wh">
          <p>プロモーションプラン運用までの流れ</p>
          <h2>FLOW</h2>
        </div>
        <div class="flex_inner">
          <div class="flow_content">
            <img src="~/assets/image/flow/flow1.svg" alt=""/>
            <p class="title">01.ヒアリング</p>
            <p class="detail">まずはヒアリングをすることで悩みが何なのか、何を目標とすべきかを明確にします。</p>
          </div>
          <img class="arrow" src="~/assets/image/flow/arrow.svg" alt=""/>
          <div class="flow_content">
            <img src="~/assets/image/flow/flow2.svg" alt=""/>
            <p class="title">02.企画・立案・制作進行</p>
            <p class="detail">
              市場リサーチ、クリエイターのご提案・キャスティング、コンテンツ企画、制作進行などのプロモーション設計を一貫して行います。
            </p>
          </div>
          <img class="arrow" src="~/assets/image/flow/arrow.svg" alt=""/>
          <div class="flow_content">
            <img src="~/assets/image/flow/flow3.svg" alt=""/>
            <p class="title">03.プラン運用</p>
            <p class="detail">
              プロモーション企画の実施、各種SNSやWebメディアの運用による企画の拡散、効果測定による最適化などを行います。
            </p>
          </div>
          <img class="arrow" src="~/assets/image/flow/arrow.svg" alt=""/>
          <div class="flow_content">
            <img src="~/assets/image/flow/flow4.svg" alt=""/>
            <p class="title">04.振り返り</p>
            <p class="detail">新たに見つかった課題の洗い出しや次回プロモーションプランに向けた振り返りをいたします。</p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="section section_contact">
      <div class="section_flow-inner">
        <div class="section-title color_blue">
          <p>お問い合わせ</p>
          <h2>CONTACT</h2>
        </div>
        <p class="detail">お仕事・お見積りのご依頼、お問い合わせ、その他ご相談を承ります。<br>お問い合わせ内容を確認後、追って担当者よりご連絡致します。<br>また、*は必須入力項目となりますのでご注意くださいませ。</p>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdlRp072bunxshRFukbifAZRwkWvfXQP0NVqDU47b1Flixlbw/formResponse?embedded=true" target="_self" method="POST" id="mG61Hd">
          <div class="form_flex">
            <div class="form_content is-half">
              <label>お名前 *</label>
              <input placeholder="界遊 太郎" type="text" name="entry.1816400363" value="" required="required">
            </div>
            <div class="form_content is-half">
              <label>フリガナ</label>
              <input placeholder="カイユウ タロウ" type="text" name="entry.146768165" value="">
            </div>
          </div>
          <div class="form_content">
            <label>メールアドレス *</label>
            <input placeholder="sample@kai-you.net" type="text" name="entry.1109039017" value="" required="required">
          </div>
          <div class="form_content">
            <label>電話番号</label>
            <input placeholder="000-1234-5678" type="text" name="entry.1092528164" value="">
          </div>
          <div class="form_content">
            <label>貴社名 *</label>
            <input placeholder="株式会社カイユウ" type="text" name="entry.894804163" value="" required="required">
          </div>
          <div class="form_flex">
            <div class="form_content is-half">
              <label>御社企業サイトURL *</label>
              <input placeholder="https://" type="text" name="entry.1148619168" value="" required="required">
            </div>
            <div class="form_content is-half">
              <label>PR予定のサイトURL</label>
              <input placeholder="https://" type="text" name="entry.369102173" value="">
            </div>
          </div>
          <div class="form_content">
            <label>ご相談の目的 *</label>
            <div class="radio_box">
              <div class="radio_inner">
                <input type="radio" name="entry.583315910" required="required" value="商品・サービスとポップカルチャーの親和性を高めたい">
                <label>商品・サービスとポップカルチャーの親和性を高めたい</label>
              </div>
              <div class="radio_inner">
                <input type="radio" name="entry.583315910" required="required" value="商品・サービスを認知拡大させたい">
                <label>商品・サービスを認知拡大させたい</label>
              </div>
              <div class="radio_inner">
                <input type="radio" name="entry.583315910" required="required" value="KAI-YOU各種サービスと協業したい">
                <label>KAI-YOU各種サービスと協業したい</label>
              </div>
              <div class="radio_inner">
                <input type="radio" name="entry.583315910" required="required" value="Webメディア『KAI-YOU.net』に広告を出稿したい">
                <label>Webメディア『KAI-YOU.net』に広告を出稿したい</label>
              </div>
              <div class="radio_inner">
                <input type="radio" name="entry.583315910" required="required" value="情報収集">
                <label>情報収集</label>
              </div>
              <div class="radio_inner">
                <input type="radio" name="entry.583315910" required="required" value="その他">
                <label>その他</label>
              </div>
            </div>
          </div>
          <div class="form_content">
            <label>自由記入欄</label>
            <textarea placeholder="ご予算、スケジュールのご希望等あればこちらにご記入ください。" type="text" name="entry.1927075268" cols="30" rows="4" value=""></textarea>
          </div>
          <button type="submit" class="lp_button">送信する</button>
        </form>
      </div>
    </section>
    <section id="5" class="section section_recruit">
      <div class="section_recruit-inner">
        <div class="right-content">
          <div class="section-title color_blue">
            <h2>RECRUIT</h2>
            <p>採用情報</p>
          </div>
          <p class="right-txt">
            KAI-YOU Marketingでは一緒に働く仲間を募集中です。
            <br>
            あなたの得意分野・ポップカルチャーに関する知見をマーケティングやコンテンツ制作に生かすことができます。日々の“遊び”をビジネスとしても楽しむ、そんなポップカルチャー好きな方お待ちしております。
          </p>
          <a target="_blank" href="http://kai-you.co.jp/recruit/" class="lp_button is-pc">募集職種をみる</a>
        </div>
        <img class="bg_image" src="~/assets/image/recruit/recruit.jpg" alt="" />
        <a target="_blank" href="http://kai-you.co.jp/recruit/" class="lp_button is-sp">募集職種をみる</a>
        <div class="bg_content"></div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import WorkListItem from '../components/WorkListItem.vue'

export default {
  name: 'IndexPage',
  compomemts: {
    WorkListItem
  },
  data() {
    return{
      works:[],
    }
  },

  async beforeMount() {
    const PER_PAGE = 28 // 最新から28件を取得
    const KAI_YOU_MARKETING_LIST_ID = 8 // KAI-YOU Marketing のみ絞ってworksを取得

    const resp = await axios.get(`https://kai-you.co.jp/wp-json/wp/v2/works?per_page=${PER_PAGE}&order=desc&publish&list=${KAI_YOU_MARKETING_LIST_ID}`)
    this.works = resp.data
  }
}
</script>
