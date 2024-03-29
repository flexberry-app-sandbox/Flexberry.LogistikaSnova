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
    /// Баржи.
    /// </summary>
    // *** Start programmer edit section *** (Баржи CustomAttributes)

    // *** End programmer edit section *** (Баржи CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БаржиE", new string[] {
            "НомерБаржи as \'Номер баржи\'",
            "Грузопод as \'Грузоподъемность, тонн\'",
            "Длина as \'Длина, м\'",
            "Ширина as \'Ширина, м\'",
            "ВысотаБаржи as \'Высота баржи, м\'",
            "ОбъемБаржи as \'Объем баржи, м^3\'"})]
    [AssociatedDetailViewAttribute("БаржиE", "ТЧРасписание", "ТЧРасписаниеE", true, "", "Расписание барж", true, new string[] {
            ""})]
    [View("БаржиL", new string[] {
            "НомерБаржи as \'Номер баржи\'",
            "Грузопод as \'Грузоподъемность, тонн\'",
            "Длина as \'Длина, м\'",
            "Ширина as \'Ширина, м\'",
            "ВысотаБаржи as \'Высота баржи, м\'",
            "ОбъемБаржи as \'Объем баржи, м^3\'"})]
    public class Баржи : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерБаржи;
        
        private double fГрузопод;
        
        private double fДлина;
        
        private double fШирина;
        
        private double fВысотаБаржи;
        
        private double fОбъемБаржи;
        
        private IIS.Logistika_snova.DetailArrayOfТЧРасписание fТЧРасписание;
        
        // *** Start programmer edit section *** (Баржи CustomMembers)

        // *** End programmer edit section *** (Баржи CustomMembers)

        
        /// <summary>
        /// ВысотаБаржи.
        /// </summary>
        // *** Start programmer edit section *** (Баржи.ВысотаБаржи CustomAttributes)

        // *** End programmer edit section *** (Баржи.ВысотаБаржи CustomAttributes)
        public virtual double ВысотаБаржи
        {
            get
            {
                // *** Start programmer edit section *** (Баржи.ВысотаБаржи Get start)

                // *** End programmer edit section *** (Баржи.ВысотаБаржи Get start)
                double result = this.fВысотаБаржи;
                // *** Start programmer edit section *** (Баржи.ВысотаБаржи Get end)

                // *** End programmer edit section *** (Баржи.ВысотаБаржи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Баржи.ВысотаБаржи Set start)

                // *** End programmer edit section *** (Баржи.ВысотаБаржи Set start)
                this.fВысотаБаржи = value;
                // *** Start programmer edit section *** (Баржи.ВысотаБаржи Set end)

                // *** End programmer edit section *** (Баржи.ВысотаБаржи Set end)
            }
        }
        
        /// <summary>
        /// Грузопод.
        /// </summary>
        // *** Start programmer edit section *** (Баржи.Грузопод CustomAttributes)

        // *** End programmer edit section *** (Баржи.Грузопод CustomAttributes)
        public virtual double Грузопод
        {
            get
            {
                // *** Start programmer edit section *** (Баржи.Грузопод Get start)

                // *** End programmer edit section *** (Баржи.Грузопод Get start)
                double result = this.fГрузопод;
                // *** Start programmer edit section *** (Баржи.Грузопод Get end)

                // *** End programmer edit section *** (Баржи.Грузопод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Баржи.Грузопод Set start)

                // *** End programmer edit section *** (Баржи.Грузопод Set start)
                this.fГрузопод = value;
                // *** Start programmer edit section *** (Баржи.Грузопод Set end)

                // *** End programmer edit section *** (Баржи.Грузопод Set end)
            }
        }
        
        /// <summary>
        /// Длина.
        /// </summary>
        // *** Start programmer edit section *** (Баржи.Длина CustomAttributes)

        // *** End programmer edit section *** (Баржи.Длина CustomAttributes)
        public virtual double Длина
        {
            get
            {
                // *** Start programmer edit section *** (Баржи.Длина Get start)

                // *** End programmer edit section *** (Баржи.Длина Get start)
                double result = this.fДлина;
                // *** Start programmer edit section *** (Баржи.Длина Get end)

                // *** End programmer edit section *** (Баржи.Длина Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Баржи.Длина Set start)

                // *** End programmer edit section *** (Баржи.Длина Set start)
                this.fДлина = value;
                // *** Start programmer edit section *** (Баржи.Длина Set end)

                // *** End programmer edit section *** (Баржи.Длина Set end)
            }
        }
        
        /// <summary>
        /// НомерБаржи.
        /// </summary>
        // *** Start programmer edit section *** (Баржи.НомерБаржи CustomAttributes)

        // *** End programmer edit section *** (Баржи.НомерБаржи CustomAttributes)
        public virtual int НомерБаржи
        {
            get
            {
                // *** Start programmer edit section *** (Баржи.НомерБаржи Get start)

                // *** End programmer edit section *** (Баржи.НомерБаржи Get start)
                int result = this.fНомерБаржи;
                // *** Start programmer edit section *** (Баржи.НомерБаржи Get end)

                // *** End programmer edit section *** (Баржи.НомерБаржи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Баржи.НомерБаржи Set start)

                // *** End programmer edit section *** (Баржи.НомерБаржи Set start)
                this.fНомерБаржи = value;
                // *** Start programmer edit section *** (Баржи.НомерБаржи Set end)

                // *** End programmer edit section *** (Баржи.НомерБаржи Set end)
            }
        }
        
        /// <summary>
        /// ОбъемБаржи.
        /// </summary>
        // *** Start programmer edit section *** (Баржи.ОбъемБаржи CustomAttributes)

        // *** End programmer edit section *** (Баржи.ОбъемБаржи CustomAttributes)
        public virtual double ОбъемБаржи
        {
            get
            {
                // *** Start programmer edit section *** (Баржи.ОбъемБаржи Get start)

                // *** End programmer edit section *** (Баржи.ОбъемБаржи Get start)
                double result = this.fОбъемБаржи;
                // *** Start programmer edit section *** (Баржи.ОбъемБаржи Get end)

                // *** End programmer edit section *** (Баржи.ОбъемБаржи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Баржи.ОбъемБаржи Set start)

                // *** End programmer edit section *** (Баржи.ОбъемБаржи Set start)
                this.fОбъемБаржи = value;
                // *** Start programmer edit section *** (Баржи.ОбъемБаржи Set end)

                // *** End programmer edit section *** (Баржи.ОбъемБаржи Set end)
            }
        }
        
        /// <summary>
        /// Ширина.
        /// </summary>
        // *** Start programmer edit section *** (Баржи.Ширина CustomAttributes)

        // *** End programmer edit section *** (Баржи.Ширина CustomAttributes)
        public virtual double Ширина
        {
            get
            {
                // *** Start programmer edit section *** (Баржи.Ширина Get start)

                // *** End programmer edit section *** (Баржи.Ширина Get start)
                double result = this.fШирина;
                // *** Start programmer edit section *** (Баржи.Ширина Get end)

                // *** End programmer edit section *** (Баржи.Ширина Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Баржи.Ширина Set start)

                // *** End programmer edit section *** (Баржи.Ширина Set start)
                this.fШирина = value;
                // *** Start programmer edit section *** (Баржи.Ширина Set end)

                // *** End programmer edit section *** (Баржи.Ширина Set end)
            }
        }
        
        /// <summary>
        /// Баржи.
        /// </summary>
        // *** Start programmer edit section *** (Баржи.ТЧРасписание CustomAttributes)

        // *** End programmer edit section *** (Баржи.ТЧРасписание CustomAttributes)
        public virtual IIS.Logistika_snova.DetailArrayOfТЧРасписание ТЧРасписание
        {
            get
            {
                // *** Start programmer edit section *** (Баржи.ТЧРасписание Get start)

                // *** End programmer edit section *** (Баржи.ТЧРасписание Get start)
                if ((this.fТЧРасписание == null))
                {
                    this.fТЧРасписание = new IIS.Logistika_snova.DetailArrayOfТЧРасписание(this);
                }
                IIS.Logistika_snova.DetailArrayOfТЧРасписание result = this.fТЧРасписание;
                // *** Start programmer edit section *** (Баржи.ТЧРасписание Get end)

                // *** End programmer edit section *** (Баржи.ТЧРасписание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Баржи.ТЧРасписание Set start)

                // *** End programmer edit section *** (Баржи.ТЧРасписание Set start)
                this.fТЧРасписание = value;
                // *** Start programmer edit section *** (Баржи.ТЧРасписание Set end)

                // *** End programmer edit section *** (Баржи.ТЧРасписание Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БаржиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БаржиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БаржиE", typeof(IIS.Logistika_snova.Баржи));
                }
            }
            
            /// <summary>
            /// "БаржиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БаржиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БаржиL", typeof(IIS.Logistika_snova.Баржи));
                }
            }
        }
    }
}
