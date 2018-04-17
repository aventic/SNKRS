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
                Content = ContentController.PageContent(CurrentPage.Url),
                Settings = SettingsController.Settings()
            };

            return View(serverModel);
        }
    }

    public class ServerLoadModel
    {
        [JsonProperty("content")]
        public PageModel Content { get; set; }

        [JsonProperty("settings")]
        public SettingsModel Settings { get; set; }
    }
}