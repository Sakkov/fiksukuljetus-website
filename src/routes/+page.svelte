<script lang="ts">
	// Import elements
	import ContactForm from './ContactForm.svelte';
	import CallToAction from './CallToAction.svelte';
	import ImageCarousel from './ImageCarousel.svelte';

	// Import images
	import Background_80_w854 from '$lib/Images/background_80_w854.webp';
	import Garvostelua from '$lib/Images/garvostelua.svg';
	import Farvostelua from '$lib/Images/farvostelua.svg';
	import Marvostelua from '$lib/Images/marvostelua.svg';
	import Five_star from '$lib/Images/star-rating.svg';
</script>

<svelte:head>
	<title>Muutto, Muutot, Muuttopalvelu Tampere & Pirkanmaa</title>
	<meta
		name="description"
		content="Fiksukuljetus Oy - muuttopalvelu Tampere ja Pirkanmaa alueella. Edulliset ja tehokkaat muutot
		juuri sinun aikataulujesi mukaan. Tilaa muutto kauttamme!"
	/>
</svelte:head>

<article class="content">
	<CallToAction />
	<div class="grid">
		<h3>
			<strong> Me autamme sinua toteuttamaan unelmasi. </strong>
			Toteuta haaveesi meidän avullamme! Olipa kyse sitten
			<ul>
				<li>
					yritysmuutosta tai kotimuutosta, <a href="#lomake">kysy urakka tarjousta!</a>
				</li>
				<li>
					Pianon, Flyygelin tai maalämpöpumpun siirrosta, <small
						><a href="/painavattavarat">Lue lisää</a></small
					>
				</li>
				<li>
					uusien tai vanhojen huonekalujen kuljettamisesta, <small
						><a href="/painavattavarat">Lue lisää</a></small
					>
				</li>
				<li>
					työmaa haalauksesta, <small><a href="/painavattavarat">Lue lisää</a></small>
				</li>
				<li>siivoustyöt loppusiivouksista raivaussiivouksiin,</li>
				<li>myös asunnon välitykset onnistuu,</li>
				<li>meiltä onnistuu kaikki!</li>
			</ul>
			Sinun ei tarvitse murehtia muuton järjestelyistä, vaan
			<strong> voit keskittyä vain nauttimaan uudesta kodistasi. </strong>
			Tarvittaessa meiltä onnistuu myös pakkausapu.
		</h3>
		<ImageCarousel />
	</div>
	<div id="review-scores">
		<a href="https://goo.gl/maps/QBsBbFJ2cU4Mm3x37" target="_blank">
			<img src={Garvostelua} alt="muutto tampere parhaat arvostelut" />
		</a>
		<a href="https://www.facebook.com/Fiksukuljetus/" target="_blank">
			<img src={Farvostelua} alt="5 tähden muuttopalvelu tampere" />
		</a>
		<a href="https://extra.muuttomaailma.fi/company/mMnhwKMn" target="_blank">
			<img src={Marvostelua} alt="muutto tampere arvostelut" />
		</a>
	</div>
	<div class="reviews">
		<div class="review">
			<p>
				"Kyllä oli nautittava muutto,kun homma tapahtui ripeästi ja tavarat suojattiin kuljetuksen
				ajaksi hyvin.Kellon tarkasti olivat paikalla aloittamassa.Firman miehet hoitivat kyllä
				autojen lastaukset,purkamiset ja uuteen asuntoon tavaroiden siirron ammattimaisesti.Kätevää
				oli saada heiltä myös muuttolaatikot.Kestävät ja sopivan kokoiset muoviset,helposti
				pinottavatkin vielä.Iso suositus!!"
			</p>
			<img src={Five_star} alt="viiden tähden muutto" />
			<p>- Muuttaja Tampere - Tampere, 6.6.2023</p>
		</div>
		<div class="review">
			<p>
				"Kaikki toimi niinkuin oltiin sovittu. Muutto sujui jouhevasti ja palvelu pelasi.
				Suosittelen ehdottomasti ja aion käyttää jatkossakin jos tarvitsee vielä muuttaa."
			</p>
			<img src={Five_star} alt="viiden tähden muutto" />
			<p>- Muuttaja Tampere - Lempäälä, 31.5.2023</p>
		</div>
		<div class="review">
			<p>
				"Todella ystävällinen asiakaspalvelu joka vaiheessa ja sain nopeasti aina vastaukset muuttoa
				koskeviin kysymyksiini. Aikataulut sovittiin joustavasti ja sain muuttolaatikot käyttööni
				hyvissä ajoin. Varsinainen muutto sujui ripeästi ja mallikkaasti. Lämmin suositus Fiksu
				Kuljetukselle!"
			</p>
			<img src={Five_star} alt="viiden tähden muutto" />
			<p>- Muuttaja Tampere - Tampere, 3.4.2023</p>
		</div>
		<div class="review">
			<p>
				"Muuttomiehet olivat kellon tarkkuudella paikalla. Juttelivat muuttoa tehdessämme ja
				muutamat naurutkin saatiin aikaan. Loistava palvelu asiakaspalvelussa ja muutto miehiltä
				loistavaa palvelua. Voin suositella!"
			</p>
			<img src={Five_star} alt="viiden tähden muutto" />
			<p>- Muuttaja Heinola - Kämmenniemi, 2.4.2023</p>
		</div>
	</div>
	<div class="tarjous">
		<strong> Meidän kautta saat myös asunnon välitykset. </strong>
		<div>
			<small>
				<a href="https://muutoslkv.fi/henri-niskala/">Yhteistyössä Muutos LKV</a>
			</small>
		</div>
	</div>
	<div class="image-container-no-large">
		<img
			src={Background_80_w854}
			width="854"
			height="641"
			alt="Luotettava muuttofirma muuttoapu ylöjärvi"
		/>
	</div>
	<p>
		<strong>Fiksukuljetus Oy</strong> on Pirkanmaan alueella toimiva muuttofirma. Meidän kauttamme
		saat edulliset ja tehokkaat muutot juuri sinun aikataulujesi mukaan. Meiltä onnistuu niin
		<strong>kotimuutot</strong>, kuin <strong>yritysmuutotkin</strong>. Myös painavien esineiden,
		kuten pianojen kuljettaminen onnistuu käden käänteessä! Päätoimipisteemme sijaitsee Tampereella,
		joten jos muuttosi toinen kohde sijaitsee Pirkanmaan alueella, pyydä rohkeasti tarjousta!
	</p>
	<h3 style="text-align: center ;">Muuton yhteydessä siivous edullisemmin!</h3>
	<p>
		<strong>Muuttolaatikoiden vuokraus</strong> edulliseen hintaan 1€/laatikko/viikko. Kestäviä ja käteviä
		laatikoita helpottamaan pakkausta. Etenkin helposti hajoavien tavaroiden kuljettaminen on huomattavasti
		turvallisempaa laadukkaissa ja kestävissä muuttolaatikoissa, kuin pahvilaatikoissa.
	</p>
</article>

<ContactForm />

<section class="content" id="aboutus">
	<h2>Yrityksestämme</h2>
	<h1>Fiksukuljetus Oy, paras muuttofirma Pirkanmaalla</h1>
	<p>
		Toimialueemme pääosin on Tampere, Ylöjärvi, Nokia, Pirkkala, Lempäälä, Kangasala ja koko
		Pirkanmaa. Teemme myös pitkänmatkan muuttoja. Kysy tarjousta!
	</p>
	<p>
		Toimenkuvaamme kuluu mm. muutot, lyhyen matkan muutto, pitkän matkan muutto, painavien
		tavaroiden kantoapu, kuljetukset, loppusiivoukset, muuttolaatikot ja kaikenlaiset muut työt.
	</p>
	<p>
		Yrityksemme tunnetaan reippaasta, huolellisesta ja laadukkaasta palvelusta sekä ahkerista
		muuttomiehistämme. Pystymme hoitamaan muutot täysin itsenäisesti alusta loppuun asti.
		Itsenäisten muuttojen lisäksi pystymme hoitamaan muutot halutessasi vain osittain esimerkiksi
		raskaimpien tavaroiden kantamisen. Kuuntelemme aina asiakkaan tarpeen ja suunnittelemme
		mahdollisimman huolettoman ja stressittömän toteutuksen asiakkaille.
	</p>
	<h2 style="text-align: center;">
		Eli, jos stressitön muutto kuulostaa hyvältä, ole meihin yhteydessä!
	</h2>
	<h2 style="text-align: center;">
		<a href="tel:+358 41 3191233">+358 41 3191233</a>
	</h2>
</section>
