using Newtonsoft.Json;

namespace SNKRS.Website.Models
{
    public class FooterMenuModel
    {
        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
