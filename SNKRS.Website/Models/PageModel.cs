using Newtonsoft.Json;

namespace SNKRS.Models
{
    public class PageModel
    {
        [JsonProperty("headline")]
        public string Headline { get; set; }

        [JsonProperty("content")]
        public string Content { get; set; }

        [JsonProperty("seo")]
        public SeoModel Seo { get; set; }
    }
}