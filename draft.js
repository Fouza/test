<script>
  setUserLocation();

  function setUserLocation() {
    fetchCurrentIpAddress().then((result) => {
      if (result && result.ip)
        document.getElementById("user-location").value = result.ip;
    });
      }

  async function fetchCurrentIpAddress() {
        return fetch("https://ipinfo.io", {
    headers: {
    Accept: "application/json",
          },
        }).then((r) => r.json());
      }
</script>
