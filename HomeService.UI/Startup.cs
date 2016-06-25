using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HomeService.UI.Startup))]
namespace HomeService.UI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
