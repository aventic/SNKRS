using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.WebApi;
using SNKRS.Helpers;
using SNKRS.Models;

namespace SNKRS.Controllers
{
    public class SettingsController : UmbracoApiController
    {
        [HttpGet]
        public HttpResponseMessage GetSettings()
        {
            try
            {
                SettingsModel settings = Settings();

                if (settings != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, settings);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, "Settings page not found");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Internal Server Error: " + ex);
            }
        }

        public static SettingsModel Settings()
        {
            IPublishedContent content = UmbracoContext.Current.ContentCache.GetByRoute(Constants.SettingsUrl);

            if (content == null)
                return null;

            return new SettingsModel
            {
                Url = Constants.RootUrl,
                Name = content.GetPropertyValue<string>("Title"),
                Logo = content.HasValue("Logo") ? Utilities.TransformSVG(content.GetPropertyValue<string>("Logo")) : null,
                MainMenu = MainMenu()
            };
        }

        public static IEnumerable<MainMenuModel> MainMenu(IPublishedContent page = null)
        {
            if (page == null)
                page = UmbracoContext.Current.ContentCache.GetByRoute(Constants.RootUrl);

            List<MainMenuModel> mainMenuList = new List<MainMenuModel>();

            foreach (IPublishedContent item in page.Children)
            {
                if (!item.GetPropertyValue<bool>("HideInMenu"))
                {
                    mainMenuList.Add(new MainMenuModel
                    {
                        Url = item.Url,
                        Name = item.Name,
                        Children = (item.Children != null && item.Children.Any()) ? MainMenu(item) : null
                    });
                }
            }

            return mainMenuList;
        }
    }
}