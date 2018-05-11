using Newtonsoft.Json;
using System.Collections.Generic;

namespace SNKRS.Models
{
    public class SettingsModel
    {
        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("logo")]
        public string Logo { get; set; }

        [JsonProperty("mainMenu")]
        public IEnumerable<MainMenuModel> MainMenu { get; set; }

        [JsonProperty("footerMenu")]
        public IEnumerable<FooterMenuModel> FooterMenu { get; set; }

        [JsonProperty("social")]
        public SocialModel Social { get; set; }
    }
}
