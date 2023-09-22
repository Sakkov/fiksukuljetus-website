<script lang="ts">
	import Contact from './Contact.svelte';

	// @ts-ignore
	let form;
	// @ts-ignore
	async function handleSubmit(event) {
		event.preventDefault();
		// @ts-ignore
		const data = new FormData(form);

		await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			// @ts-ignore
			body: new URLSearchParams(Array.from(data)).toString()
		})
			.then(() => (location.href = '/kiitos'))
			.catch((error) => alert(error));
	}
</script>

<form
    id="lomake"
	class="content"
    bind:this={form}
    name="contact"
    data-netlify="true"
    on:submit={handleSubmit}
>
	<input type="hidden" name="form-name" value="contact" />
	<!-- <h2>Ota yhteyttä!</h2>

	<Contact />

	<br />
	<h2>
		<strong>Yhteydenottolomake</strong>
	</h2>

	<div class="form-question">
		<label for="nimi">Nimi</label>
		<input type="text" id="nimi" name="Nimi" placeholder="Nimi" required />
	</div>
	<div class="form-question">
		<label for="puhelin">Puhelinnumero</label>
		<input type="tel" id="puhelin" name="puhelin" placeholder="Puhelinnumero" required />
	</div>
	<div class="form-question">
		<label for="email">Sähköpostiosoite</label>
		<input type="email" id="email" name="email" placeholder="Sähköpostiosoite" required />
	</div>
	<div class="form-question">
		<label for="laskutusosoite">Laskutusosoite</label>
		<input
			type="text"
			id="laskutusosoite"
			name="Laskutusosoite"
			placeholder="Laskutusosoite"
			required
		/>
	</div>
	<div class="form-question">
		<label for="osoiteesta">Osoite, josta muutetaan</label>
		<input
			type="text"
			id="osoiteesta"
			name="Osoite, josta muutetaan"
			placeholder="lähtö osoite"
			required
		/>
	</div>
	<div class="form-question">
		<label for="lähtö-kerros">Mikä kerros lähtökohteessa?</label>
		<input
			type="number"
			id="lähtö-kerros"
			name="lähtö-kerros"
			placeholder="lähtö kerros"
			required
		/>
	</div>
	<div class="form-question">
		<label for="hissi lähtökohteessa">Onko hissi lähtökohteessa?</label>
		<div>
			<input
				type="radio"
				id="hissi-kyllä-lähtökohteessa"
				name="hissi lähtökohteessa"
				value="Kyllä"
				required
			/>
			<label for="hissi-kyllä-lähtökohteessa">Kyllä</label>
			<input
				type="radio"
				id="hissi-ei-lähtökohteessa"
				name="hissi lähtökohteessa"
				value="Ei"
				required
			/>
			<label for="hissi-ei-lähtökohteessa">Ei</label>
		</div>
	</div>
	<div class="form-question">
		<label for="osoiteeseen">Osoite, johon muutetaan</label>
		<input
			type="text"
			id="osoiteeseen"
			name="Osoite, johon muutetaan"
			placeholder="saapumis osoite"
			required
		/>
	</div>
	<div class="form-question">
		<label for="saapumis-kerros">Mikä kerros uudessa kohteessa?</label>
		<input
			type="number"
			id="saapumis-kerros"
			name="saapumis-kerros"
			placeholder="saapumis kerros"
			required
		/>
	</div>
	<div class="form-question">
		<label for="hissi uudessa kohteessa">Onko hissi uudessa kohteessa?</label>
		<div>
			<input
				type="radio"
				id="hissi-kyllä-uudessa-kohteessa"
				name="hissi uudessa kohteessa"
				value="Kyllä"
				required
			/>
			<label for="hissi-kyllä-uudessa-kohteessa">Kyllä</label>
			<input
				type="radio"
				id="hissi-ei-uudessa-kohteessa"
				name="hissi uudessa kohteessa"
				value="Ei"
				required
			/>
			<label for="hissi-ei-uudessa-kohteessa">Ei</label>
		</div>
	</div>
	<div class="form-question">
		<label for="neliöt">Muutettavan asunnon neliöt (m²)</label>
		<input
			type="number"
			id="neliöt"
			name="Muutettavan asunnon neliöt"
			placeholder="Muutettavan asunnon neliöt"
			min="-1"
			required
		/>
	</div>
	<div class="form-question">
		<label for="etäisyys">Muuttokohteiden välinen etäisyys (km)</label>
		<input
			type="number"
			id="etäisyys"
			name="Muuttokohteiden välinen etäisyys"
			placeholder="Muuttokohteiden välinen etäisyys"
			min="-1"
			required
		/>
	</div>
	<div class="form-question">
		<label for="painavia">Erityisen painavat huonekalut (yli 100kg), kuten pianot yms.</label>
		<div>
			<textarea
				name="Erityisen painavat huonekalut (yli 100kg), kuten pianot yms."
				id="painavia"
				cols="30"
				rows="5"
				placeholder="Erityisen painavat huonekalut (yli 100kg), kuten pianot yms."
				required
			/>
		</div>
	</div>
	<div class="form-question">
		<label for="muuttopaiva">Muuttopäivä</label>
		<input type="date" id="muuttopaiva" name="muuttopäivä" />
	</div>
	<div class="form-question">
		<label for="mista_loysit_meidat">Mistä löysit meidät?</label>
		<div>
			<textarea
				name="Mistä löysit meidät?"
				id="mista_loysit_meidat"
				cols="30"
				rows="5"
				placeholder="Mistä löysit meidät?"
			/>
		</div>
	</div> -->
	<div class="form-question">
		<label for="muuta">Muuta huomioitavaa</label>
		<div>
			<textarea
				name="Muuta huomioitavaa"
				id="muuta"
				cols="30"
				rows="5"
				placeholder="Muuta huomioitavaa"
			/>
		</div>
		<small>
			Kuljetettavan tavaran kuvaus, erityisen kookkaat kalusteet, autoa ei saa oven eteen, omat
			kantajat, tarve kierrätyspalvelulle tms.
		</small>
	</div>

	<div class="form-buttons">
		<button type="reset">Tyhjennä</button>
		<button type="submit">Lähetä</button>
	</div>
</form>
