using Newtonsoft.Json;
using System.Collections.Generic;

namespace SNKRS.Models
{
    public class FooterMenuModel
    {
        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
