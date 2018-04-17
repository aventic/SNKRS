using Newtonsoft.Json;
using System.Collections.Generic;

namespace SNKRS.Models
{
    public class MainMenuModel
    {
        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("children")]
        public IEnumerable<MainMenuModel> Children { get; set; }
    }
}