<script lang="ts">
  import CommanderDamage from "./CommanderDamage.svelte";
  import FloatingMana from "./FloatingMana.svelte";
  import { labels, lang } from "./settings";

  const gameStartedAt = Math.floor(new Date().getTime() / 1000);
  let currentTime = Math.floor(new Date().getTime() / 1000);
  setInterval(() => {
    currentTime = Math.floor(new Date().getTime() / 1000);
  }, 1000);

  let health = 40;
  let lastPress = new Date().getTime();
  document.onkeydown = (event) => {
    if (new Date().getTime() - lastPress < 250) return;
    lastPress = new Date().getTime();
    console.log("? down");
    // Check if the pressed key is the "up" arrow
    if (event.key === "ArrowUp") {
      // Call the function when the "up" arrow is pressed
      health++;
    }
    if (event.key === "ArrowDown") {
      // Call the function when the "up" arrow is pressed
      health--;
    }
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs > 0 ? hrs + $labels.hours[$lang] : ""}${String(mins).padStart(2, "0") + $labels.minutes[$lang]} ${String(secs).padStart(2, "0")}${$labels.seconds[$lang]}`;
  };
</script>

<main>
  <div class="wrap">
    <div class="hp"><span>{health} {$labels.health[$lang]}</span></div>
    <div class="hp">
      <div class="cmd-dmg-title-label">{$labels.commanderDamage[$lang]}</div>
      <CommanderDamage />
      <CommanderDamage />
      <CommanderDamage />
      <CommanderDamage />
    </div>
    <div class="cmd-dmg-title-label">{$labels.floatingMana[$lang]}</div>
    <FloatingMana />
    <div class="text-xsm text-center text-xlight">
      {$labels.timeSinceGameStart[$lang]}: {formatTime(
        currentTime - gameStartedAt
      )}
    </div>
  </div>
</main>

<style>
</style>
