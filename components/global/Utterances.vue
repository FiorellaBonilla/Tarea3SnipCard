<template>
</template>
<script>

export default {
  layout: "default",

  head: {
    script: [
      {
        src: 'https://utteranc.es/client.js',
        repo: "FiorellaBonilla/Tarea2Comentarios",
        'issue-term': "pathname",
        label: "comments",
        theme: "icy-dark",
        crossorigin: "anonymous",
        body: true,
        async: true
      }
    ]
  },

};
</script>
