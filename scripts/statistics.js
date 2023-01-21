hexo.extend.filter.register('theme_inject', function(injects) {
  injects.header.file('default', 'source/_inject/test1.ejs', { key: 'value' }, -1);
  injects.footer.raw('default', '站点访问量 <span id="qexo-site-pv">Loading...</span>
    站点访客数 <span id="qexo-site-uv">Loading...</span>
    页面访问量 <span id="qexo-page-pv">Loading...</span>
    <script src="https://cdn.jsdelivr.net/npm/qexo-static@1.3.0/hexo/statistic/statistic.min.js"></script>
    <script>
        loadStatistic("https://blog.admin.647382.xyz")
    </script>');
});
