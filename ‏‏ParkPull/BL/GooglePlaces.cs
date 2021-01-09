using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace BL
{
    public  class GooglePlaces
    {
        public static int GetWalkingDuration(string startPoint, string destination)
        {
            string key = ConfigurationManager.AppSettings["googleAPIKey"];
            string uri = "https://maps.googleapis.com/maps/api/distancematrix/xml?key="+key+"&origins="
                          + startPoint + "&destinations=" + destination + "&mode=walking&units=imperial&sensor=false";
            WebClient wc = new WebClient();
            try
            {
                string geoCodeInfo = wc.DownloadString(uri);
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.LoadXml(geoCodeInfo);

                string duration = xmlDoc.DocumentElement.SelectSingleNode("/DistanceMatrixResponse/row/element/duration/value").InnerText;
                return Convert.ToInt32(duration) / 60;
            }
            catch (Exception)
            {
                return -1;
            }
        }

        public static string ReverseGeoCoder(double lat, double lng)
        {
            string latLng = lat + "," + lng;
            string key = ConfigurationManager.AppSettings["googleAPIKey"];
            string uri = "https://maps.google.com/maps/api/geocode/xml?key="+key+"&latlng="+ latLng + "&sensor=false";
            WebClient wc = new WebClient();
            try
            {
                string geoCodeInfo = wc.DownloadString(uri);
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.LoadXml(geoCodeInfo);

                string formattedAddress = xmlDoc.DocumentElement.SelectSingleNode("/GeocodeResponse/result/formatted_address").InnerText;
                return formattedAddress;
            }
            catch (Exception)
            {
                return "";
            }
        }


    }
}
