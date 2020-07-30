<script>
export default {
  render(createElement) {
    return createElement(
      "div",
      {
        on: {
          click: e => {
            e.target.style.backgroundColor = "red";
          }
        }
      },
      [createElement("span", ["HELLO~!"])]
    );
  }
};
</script>