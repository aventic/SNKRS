using Newtonsoft.Json;
using System.Web.Mvc;
using Umbraco.Web.Mvc;
using SNKRS.Models;

namespace SNKRS.Controllers
{
    public class HomeController : SurfaceController
    {
        public ActionResult Index()
        {
            ServerLoadModel serverModel = new ServerLoadModel
            {
                Page = ContentController.PageContent(CurrentPage.Url),
                Settings = SettingsController.Settings()
            };

            return View(serverModel);
        }
    }

    public class ServerLoadModel
    {
        [JsonProperty("page")]
        public PageModel Page { get; set; }

        [JsonProperty("settings")]
        public SettingsModel Settings { get; set; }
    }
}
