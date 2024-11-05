<script lang="ts">
  let mana = {
    black: 0,
    white: 0,
    blue: 0,
    green: 0,
    red: 0,
    colorless: 0,
  };

  const addMana = (
    color: "black" | "white" | "blue" | "green" | "red" | "colorless"
  ) => mana[color]++;
  const removeMana = (
    color: "black" | "white" | "blue" | "green" | "red" | "colorless"
  ) => {
    if (mana[color] > 0) mana[color]--;
  };
</script>

<div class="m-auto d-inline-block">
  <table class="text-sm">
    <tbody>
      <tr>
        <td>白</td>
        <td>青</td>
        <td>黒</td>
        <td>緑</td>
        <td>赤</td>
        <td>無</td>
      </tr>
      <tr>
        <td><span on:click={() => addMana("white")} class="btn p-1">+</span></td
        >
        <td><span on:click={() => addMana("blue")} class="btn p-1">+</span></td>
        <td><span on:click={() => addMana("black")} class="btn p-1">+</span></td
        >
        <td><span on:click={() => addMana("green")} class="btn p-1">+</span></td
        >
        <td><span on:click={() => addMana("red")} class="btn p-1">+</span></td>
        <td
          ><span on:click={() => addMana("colorless")} class="btn p-1">+</span
          ></td
        >
      </tr>
      <tr>
        <td>{mana["white"]}</td>
        <td>{mana["blue"]}</td>
        <td>{mana["black"]}</td>
        <td>{mana["green"]}</td>
        <td>{mana["red"]}</td>
        <td>{mana["colorless"]}</td>
      </tr>
      <tr>
        <td
          ><span on:click={() => removeMana("white")} class="btn p-1">-</span
          ></td
        >
        <td
          ><span on:click={() => removeMana("blue")} class="btn p-1">-</span
          ></td
        >
        <td
          ><span on:click={() => removeMana("black")} class="btn p-1">-</span
          ></td
        >
        <td
          ><span on:click={() => removeMana("green")} class="btn p-1">-</span
          ></td
        >
        <td
          ><span on:click={() => removeMana("red")} class="btn p-1">-</span></td
        >
        <td
          ><span on:click={() => removeMana("colorless")} class="btn p-1"
            >-</span
          ></td
        >
      </tr>
    </tbody>
  </table>
  <div class="text-center mt-1">
    <div
      on:click={() => {
        mana = {
          black: 0,
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          colorless: 0,
        };
      }}
      class="p-1 w-100 btn-big"
    >
      消す
    </div>
  </div>
</div>
