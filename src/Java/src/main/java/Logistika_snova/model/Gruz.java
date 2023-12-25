package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Груз
 */
@Entity(name = "IISLogistika_snovaГруз")
@Table(schema = "public", name = "Груз")
public class Gruz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КатегорияГр")
    private String категориягр;

    @Column(name = "Ширина")
    private Double ширина;

    @Column(name = "Высота")
    private Double высота;

    @Column(name = "Длина")
    private Double длина;

    @Column(name = "Масса")
    private Double масса;

    @Column(name = "Объем")
    private Double объем;

    @Column(name = "КодГруза")
    private Integer кодгруза;


    public Gruz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКатегорияГр() {
      return категориягр;
    }

    public void setКатегорияГр(String категориягр) {
      this.категориягр = категориягр;
    }

    public Double getШирина() {
      return ширина;
    }

    public void setШирина(Double ширина) {
      this.ширина = ширина;
    }

    public Double getВысота() {
      return высота;
    }

    public void setВысота(Double высота) {
      this.высота = высота;
    }

    public Double getДлина() {
      return длина;
    }

    public void setДлина(Double длина) {
      this.длина = длина;
    }

    public Double getМасса() {
      return масса;
    }

    public void setМасса(Double масса) {
      this.масса = масса;
    }

    public Double getОбъем() {
      return объем;
    }

    public void setОбъем(Double объем) {
      this.объем = объем;
    }

    public Integer getКодГруза() {
      return кодгруза;
    }

    public void setКодГруза(Integer кодгруза) {
      this.кодгруза = кодгруза;
    }


}