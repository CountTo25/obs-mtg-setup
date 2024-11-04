<script lang="ts">
  import { labels, lang } from "./settings";
  let dmg = 0;
</script>

<div class="text-left mb-1">
  <div class="cmd-dmg-div">
    <span class="cmd-dmg-span">
      <input
        class="cmd-dmg-input"
        placeholder={$labels.opponentNamePlaceholder[$lang]}
      />
    </span>
    <span class="cmd-dmg-ctrl-block">
      <span class="p-m-block">
        <span
          on:click={() => {
            if (dmg < 21) dmg++;
          }}
          class="btn">+</span
        >
        <span
          on:click={() => {
            if (dmg > 0) dmg--;
          }}
          class="btn">-</span
        >
      </span>
    </span>
    <span class="cmd-dmg-label">{dmg}</span>
  </div>
</div>
