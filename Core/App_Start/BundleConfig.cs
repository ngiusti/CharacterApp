using System.Web;
using System.Web.Optimization;

namespace Core
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));
             
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/bootstrap.css"));

            //Character page bundles
            bundles.Add(new ScriptBundle("~/scriptBundles/Character")
                .Include("~/Scripts/Bootstrap4/*.js")
                .Include("~/Scripts/Character/*.js"));

            bundles.Add(new StyleBundle("~/styleBundles/Character")
                .Include("~/Content/Character/font-awesome.min.css")
                .Include("~/Content/Character/*.css")
                .Include("~/Content/Bootstrap4/*.css"));

            bundles.Add(new ScriptBundle("~/scriptBundles/Bootstrap4")
                .Include("~/Scripts/Bootstrap4/*.js"));

            bundles.Add(new StyleBundle("~/styleBundles/Bootstrap4")
                .Include("~/Content/Bootstrap4/*.css"));

            bundles.Add(new ScriptBundle("~/scriptBundles/Angular")
                .Include("~/Scripts/angular.js")
                );

            bundles.Add(new ScriptBundle("~/scriptBundles/Money")
                .Include("~/Angular/Controllers/*.js")
            );
            BundleTable.EnableOptimizations = false;
        }
    }
}
