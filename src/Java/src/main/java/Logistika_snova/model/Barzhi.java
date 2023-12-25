package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Баржи
 */
@Entity(name = "IISLogistika_snovaБаржи")
@Table(schema = "public", name = "Баржи")
public class Barzhi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерБаржи")
    private Integer номербаржи;

    @Column(name = "Грузопод")
    private Double грузопод;

    @Column(name = "Длина")
    private Double длина;

    @Column(name = "Ширина")
    private Double ширина;

    @Column(name = "ВысотаБаржи")
    private Double высотабаржи;

    @Column(name = "ОбъемБаржи")
    private Double объембаржи;

    @OneToMany(mappedBy = "barzhi", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHRaspisanie> tchraspisanies;


    public Barzhi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерБаржи() {
      return номербаржи;
    }

    public void setНомерБаржи(Integer номербаржи) {
      this.номербаржи = номербаржи;
    }

    public Double getГрузопод() {
      return грузопод;
    }

    public void setГрузопод(Double грузопод) {
      this.грузопод = грузопод;
    }

    public Double getДлина() {
      return длина;
    }

    public void setДлина(Double длина) {
      this.длина = длина;
    }

    public Double getШирина() {
      return ширина;
    }

    public void setШирина(Double ширина) {
      this.ширина = ширина;
    }

    public Double getВысотаБаржи() {
      return высотабаржи;
    }

    public void setВысотаБаржи(Double высотабаржи) {
      this.высотабаржи = высотабаржи;
    }

    public Double getОбъемБаржи() {
      return объембаржи;
    }

    public void setОбъемБаржи(Double объембаржи) {
      this.объембаржи = объембаржи;
    }


}