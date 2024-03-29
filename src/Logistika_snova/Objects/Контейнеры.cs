﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Logistika_snova
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контейнеры.
    /// </summary>
    // *** Start programmer edit section *** (Контейнеры CustomAttributes)

    // *** End programmer edit section *** (Контейнеры CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтейнерыE", new string[] {
            "НомерКонтей as \'Номер контейнера\'",
            "НаимКонтей as \'Наименование контейнера\'",
            "Длина as \'Длина, м\'",
            "Ширина as \'Ширина, м\'",
            "Высота as \'Высота, м\'",
            "Объем as \'Объем, м^3\'",
            "МаксВес as \'Максимальный вес, кг\'"})]
    [View("КонтейнерыL", new string[] {
            "НомерКонтей as \'Номер контейнера\'",
            "НаимКонтей as \'Наименование контейнера\'",
            "Длина as \'Длина, м\'",
            "Ширина as \'Ширина, м\'",
            "Высота as \'Высота, м\'",
            "Объем as \'Объем, м^3\'",
            "МаксВес as \'Максимальный вес, кг\'"})]
    public class Контейнеры : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерКонтей;
        
        private string fНаимКонтей;
        
        private double fДлина;
        
        private double fШирина;
        
        private double fВысота;
        
        private double fОбъем;
        
        private double fМаксВес;
        
        // *** Start programmer edit section *** (Контейнеры CustomMembers)

        // *** End programmer edit section *** (Контейнеры CustomMembers)

        
        /// <summary>
        /// Высота.
        /// </summary>
        // *** Start programmer edit section *** (Контейнеры.Высота CustomAttributes)

        // *** End programmer edit section *** (Контейнеры.Высота CustomAttributes)
        public virtual double Высота
        {
            get
            {
                // *** Start programmer edit section *** (Контейнеры.Высота Get start)

                // *** End programmer edit section *** (Контейнеры.Высота Get start)
                double result = this.fВысота;
                // *** Start programmer edit section *** (Контейнеры.Высота Get end)

                // *** End programmer edit section *** (Контейнеры.Высота Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контейнеры.Высота Set start)

                // *** End programmer edit section *** (Контейнеры.Высота Set start)
                this.fВысота = value;
                // *** Start programmer edit section *** (Контейнеры.Высота Set end)

                // *** End programmer edit section *** (Контейнеры.Высота Set end)
            }
        }
        
        /// <summary>
        /// Длина.
        /// </summary>
        // *** Start programmer edit section *** (Контейнеры.Длина CustomAttributes)

        // *** End programmer edit section *** (Контейнеры.Длина CustomAttributes)
        public virtual double Длина
        {
            get
            {
                // *** Start programmer edit section *** (Контейнеры.Длина Get start)

                // *** End programmer edit section *** (Контейнеры.Длина Get start)
                double result = this.fДлина;
                // *** Start programmer edit section *** (Контейнеры.Длина Get end)

                // *** End programmer edit section *** (Контейнеры.Длина Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контейнеры.Длина Set start)

                // *** End programmer edit section *** (Контейнеры.Длина Set start)
                this.fДлина = value;
                // *** Start programmer edit section *** (Контейнеры.Длина Set end)

                // *** End programmer edit section *** (Контейнеры.Длина Set end)
            }
        }
        
        /// <summary>
        /// МаксВес.
        /// </summary>
        // *** Start programmer edit section *** (Контейнеры.МаксВес CustomAttributes)

        // *** End programmer edit section *** (Контейнеры.МаксВес CustomAttributes)
        public virtual double МаксВес
        {
            get
            {
                // *** Start programmer edit section *** (Контейнеры.МаксВес Get start)

                // *** End programmer edit section *** (Контейнеры.МаксВес Get start)
                double result = this.fМаксВес;
                // *** Start programmer edit section *** (Контейнеры.МаксВес Get end)

                // *** End programmer edit section *** (Контейнеры.МаксВес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контейнеры.МаксВес Set start)

                // *** End programmer edit section *** (Контейнеры.МаксВес Set start)
                this.fМаксВес = value;
                // *** Start programmer edit section *** (Контейнеры.МаксВес Set end)

                // *** End programmer edit section *** (Контейнеры.МаксВес Set end)
            }
        }
        
        /// <summary>
        /// НаимКонтей.
        /// </summary>
        // *** Start programmer edit section *** (Контейнеры.НаимКонтей CustomAttributes)

        // *** End programmer edit section *** (Контейнеры.НаимКонтей CustomAttributes)
        [StrLen(255)]
        public virtual string НаимКонтей
        {
            get
            {
                // *** Start programmer edit section *** (Контейнеры.НаимКонтей Get start)

                // *** End programmer edit section *** (Контейнеры.НаимКонтей Get start)
                string result = this.fНаимКонтей;
                // *** Start programmer edit section *** (Контейнеры.НаимКонтей Get end)

                // *** End programmer edit section *** (Контейнеры.НаимКонтей Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контейнеры.НаимКонтей Set start)

                // *** End programmer edit section *** (Контейнеры.НаимКонтей Set start)
                this.fНаимКонтей = value;
                // *** Start programmer edit section *** (Контейнеры.НаимКонтей Set end)

                // *** End programmer edit section *** (Контейнеры.НаимКонтей Set end)
            }
        }
        
        /// <summary>
        /// НомерКонтей.
        /// </summary>
        // *** Start programmer edit section *** (Контейнеры.НомерКонтей CustomAttributes)

        // *** End programmer edit section *** (Контейнеры.НомерКонтей CustomAttributes)
        public virtual int НомерКонтей
        {
            get
            {
                // *** Start programmer edit section *** (Контейнеры.НомерКонтей Get start)

                // *** End programmer edit section *** (Контейнеры.НомерКонтей Get start)
                int result = this.fНомерКонтей;
                // *** Start programmer edit section *** (Контейнеры.НомерКонтей Get end)

                // *** End programmer edit section *** (Контейнеры.НомерКонтей Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контейнеры.НомерКонтей Set start)

                // *** End programmer edit section *** (Контейнеры.НомерКонтей Set start)
                this.fНомерКонтей = value;
                // *** Start programmer edit section *** (Контейнеры.НомерКонтей Set end)

                // *** End programmer edit section *** (Контейнеры.НомерКонтей Set end)
            }
        }
        
        /// <summary>
        /// Объем.
        /// </summary>
        // *** Start programmer edit section *** (Контейнеры.Объем CustomAttributes)

        // *** End programmer edit section *** (Контейнеры.Объем CustomAttributes)
        public virtual double Объем
        {
            get
            {
                // *** Start programmer edit section *** (Контейнеры.Объем Get start)

                // *** End programmer edit section *** (Контейнеры.Объем Get start)
                double result = this.fОбъем;
                // *** Start programmer edit section *** (Контейнеры.Объем Get end)

                // *** End programmer edit section *** (Контейнеры.Объем Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контейнеры.Объем Set start)

                // *** End programmer edit section *** (Контейнеры.Объем Set start)
                this.fОбъем = value;
                // *** Start programmer edit section *** (Контейнеры.Объем Set end)

                // *** End programmer edit section *** (Контейнеры.Объем Set end)
            }
        }
        
        /// <summary>
        /// Ширина.
        /// </summary>
        // *** Start programmer edit section *** (Контейнеры.Ширина CustomAttributes)

        // *** End programmer edit section *** (Контейнеры.Ширина CustomAttributes)
        public virtual double Ширина
        {
            get
            {
                // *** Start programmer edit section *** (Контейнеры.Ширина Get start)

                // *** End programmer edit section *** (Контейнеры.Ширина Get start)
                double result = this.fШирина;
                // *** Start programmer edit section *** (Контейнеры.Ширина Get end)

                // *** End programmer edit section *** (Контейнеры.Ширина Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контейнеры.Ширина Set start)

                // *** End programmer edit section *** (Контейнеры.Ширина Set start)
                this.fШирина = value;
                // *** Start programmer edit section *** (Контейнеры.Ширина Set end)

                // *** End programmer edit section *** (Контейнеры.Ширина Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтейнерыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтейнерыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтейнерыE", typeof(IIS.Logistika_snova.Контейнеры));
                }
            }
            
            /// <summary>
            /// "КонтейнерыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтейнерыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтейнерыL", typeof(IIS.Logistika_snova.Контейнеры));
                }
            }
        }
    }
}
