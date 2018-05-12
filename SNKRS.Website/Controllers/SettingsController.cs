using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.WebApi;
using SNKRS.Website.Helpers;
using SNKRS.Website.Models;

namespace SNKRS.Website.Controllers
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
                Email = content.GetPropertyValue<string>("Email"),
                Logo = content.HasValue("Logo") ? Utilities.TransformSVG(content.GetPropertyValue<string>("Logo")) : null,
                MainMenu = MainMenu(),
                FooterMenu = FooterMenu(),
                Social = Social()
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

        public static IEnumerable<FooterMenuModel> FooterMenu()
        {
            IPublishedContent page = UmbracoContext.Current.ContentCache.GetByRoute(Constants.FooterUrl);

            List<FooterMenuModel> footerMenuList = new List<FooterMenuModel>();

            foreach (IPublishedContent item in page.GetPropertyValue<IEnumerable<IPublishedContent>>("Links"))
            {
                footerMenuList.Add(new FooterMenuModel
                {
                    Url = item.Url,
                    Name = item.Name
                });
            }

            return footerMenuList;
        }

        public static SocialModel Social()
        {
            IPublishedContent page = UmbracoContext.Current.ContentCache.GetByRoute(Constants.SocialUrl);

            return new SocialModel
            {
                FacebookLink = page.GetPropertyValue<string>("FacebookLink"),
                TwitterLink = page.GetPropertyValue<string>("TwitterLink"),
                InstagramLink = page.GetPropertyValue<string>("InstagramLink"),
            };
        }
    }
}
