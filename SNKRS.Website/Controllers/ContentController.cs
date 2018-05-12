using System;
using System.Net.Http;
using System.Web.Mvc;
using Umbraco.Web.WebApi;
using SNKRS.Website.Models;
using SNKRS.Website.Helpers;
using System.Net;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace SNKRS.Website.Controllers
{
    public class ContentController : UmbracoApiController
    {
        [HttpGet]
        public HttpResponseMessage GetContent(string url = Constants.RootUrl)
        {
            if (!url.Contains("/"))
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Input has to be url-formatted");

            try
            {
                PageModel content = PageContent(url);

                if (content != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, content);
                }
                else
                {
                    PageModel notFoundContent = PageContent(Constants.NotFoundUrl);

                    if (notFoundContent != null)
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound, notFoundContent);
                    }
                    else
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound, "404 page not found");
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Internal Server Error: " + ex);
            }
        }

        public static PageModel PageContent(string url)
        {
            IPublishedContent content = UmbracoContext.Current.ContentCache.GetByRoute(url);

            if (content == null)
                return null;

            return new PageModel
            {
                Headline = content.GetPropertyValue<string>("Headline"),
                Content = content.GetPropertyValue<string>("Content"),
                Seo = new SeoModel
                {
                    Title = content.GetPropertyValue<string>("Title"),
                    Description = content.GetPropertyValue<string>("Description"),
                    NoIndex = content.GetPropertyValue<bool>("NoIndex")
                }
            };
        }
    }
}
