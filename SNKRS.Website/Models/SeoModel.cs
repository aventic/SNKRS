using Newtonsoft.Json;

namespace SNKRS.Models
{
    public class SeoModel
    {
        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("noIndex")]
        public bool NoIndex { get; set; }
    }
}