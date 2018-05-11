using Newtonsoft.Json;

namespace SNKRS.Models
{
    public class SocialModel
    {
        [JsonProperty("facebookLink")]
        public string FacebookLink { get; set; }

        [JsonProperty("twitterLink")]
        public string TwitterLink { get; set; }

        [JsonProperty("instagramLink")]
        public string InstagramLink { get; set; }
    }
}
